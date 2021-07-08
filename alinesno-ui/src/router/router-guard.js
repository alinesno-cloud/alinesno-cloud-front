import { getToken, setExpiresIn, setRefreshToken, setToken } from '../utils/auth'
import store from '../store'

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

export const UaaRouterGuard = new Object()
/**
 * 接入全局的单点路由守卫,拦截所有的401响应和 beforeEach
 * @param Vue vue构造器
 * @param options {opts}
 */
UaaRouterGuard.install = (Vue, options) => {
  if (options && options['routerInstance']) {
    const { routerInstance } = options
    routerInstance.beforeEach(routerTokenService)
  } else {
    console.warn('UaaRouterGuard', '使用UaaRouterGuard插件必须为options设置路由实例对象!!!')
  }
}
