import { getToken, setExpiresIn, setRefreshToken, setToken } from '../utils/auth'
import request from '../utils/request'

const routerTokenService = (to, from, next) => {
  const {
    code
  } = to.query
  if (code) {
    //必须包含code参数才认为是授权中心回传的
    request({
      method: 'post',
      url: '/exchangeToken',
      params: { code }
    }).then(resp => {
      const token = resp.data
      setRefreshToken(token.refresh_token)
      setExpiresIn(token.expires_in)
      setToken(token.access_token)
      const rm = [
        'code'
      ]
      const rewriteParam = new URLSearchParams()
      Object.keys(to.query)
        .filter(f => !rm.includes(f))
        .forEach(n => rewriteParam.append(n, to.query[n]))
      const path = `${to.path}?${rewriteParam.toString()}`
      next(path)
    })

  } else {
    next()
  }

}

const AuthGuardService = (to, from, next) => {
  if (!getToken()) {
    //没有token时拦截
    next(false)
    request({
      url: '/tryLogin',
      method: 'get',
    }).then((res) => {
      const { loginEndPoint } = res.data
      location.href = loginEndPoint
    })
  } else {
    next()
  }
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
    //hack路由守卫顺序，确保授权拦截的hook优先级最高
    const oldROuterBeforeHook = [].concat(routerInstance.beforeHooks);
    routerInstance.beforeHooks = [];
    routerInstance.beforeEach(routerTokenService)
    routerInstance.beforeEach(AuthGuardService)
    Vue.useSSO = true;
    oldROuterBeforeHook.forEach(hook=>routerInstance.beforeEach(hook))
  } else {
    console.warn('UaaRouterGuard', '使用UaaRouterGuard插件必须为options设置路由实例对象!!!')
  }
}
