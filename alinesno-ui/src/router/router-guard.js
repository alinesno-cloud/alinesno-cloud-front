import { getToken, setExpiresIn, setRefreshToken, setToken } from '../utils/auth'
import { MessageBox } from 'element-ui'
import request from '../utils/request'

const routerTokenService = (to, from, next) => {
  const {
    access_token,
    expires_in,
    refresh_token,
    token_type,
    scope,
    jti
  } = to.query
  if (access_token && expires_in &&
    refresh_token && token_type &&
    scope && jti) {
    //必须包含所有的参数才认为是授权中心回传的
    setRefreshToken(refresh_token)
    setExpiresIn(expires_in)
    setToken(access_token)
    const rm = [
      'access_token',
      'expires_in',
      'refresh_token',
      'token_type',
      'scope',
      'jti'
    ]
    const rewriteParam = new URLSearchParams()
    Object.keys(to.query)
      .filter(f => !rm.includes(f))
      .forEach(n => rewriteParam.append(n, to.query[n]))
    const path = `${to.path}?${rewriteParam.toString()}`
    next(path)
  } else {
    next()
  }

}

const AuthGuardService = (to, from, next) => {
  if (!getToken()) {
    //没有token时拦截
    next(false)
    MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }
    ).then(() => {
      request({
        url: '/tryLogin',
        method: 'get',
      }).then((res) => {
        const { loginEndPoint, secret } = res.data
        const fromRouter = location.href
        const query = new URLSearchParams()
        query.append('fromHere', fromRouter)
        query.append('secret', secret)
        location.href = `${loginEndPoint}?${query.toString()}`
      })
    })
  } else {
    next()
  }
}

const RouterGuardService = (to, from, next) => {


}
export const EnableUaaClient = new Object()
/**
 * 接入全局的单点路由守卫,拦截所有的401响应和 beforeEach
 * @param Vue vue构造器
 * @param options {opts}
 */
EnableUaaClient.install = (Vue, options) => {
  if (options && options['routerInstance']) {
    const { routerInstance } = options
    routerInstance.beforeEach(routerTokenService)
    routerInstance.beforeEach(AuthGuardService)
  } else {
    console.warn('UaaRouterGuard', '使用UaaRouterGuard插件必须为options设置路由实例对象!!!')
  }
}
