const TokenKey = 'access_token'
const RefreshTokenKey = 'refresh_token'
const expires_in = 'expires_in'

export function getToken () {
  return localStorage.getItem(TokenKey)
}

export function getRefreshToken () {
  return localStorage.getItem(RefreshTokenKey)
}

export function setRefreshToken (val) {
   localStorage.setItem(RefreshTokenKey, val)
}

export function getExpiresIn () {
  return localStorage.getItem(expires_in)
}

export function setExpiresIn (token) {
   localStorage.setItem(expires_in, token)
}

export function setToken (token) {
  if (token !== '') {
     localStorage.setItem(TokenKey, token)
  }
}

export function removeToken () {
  localStorage.clear()
}
