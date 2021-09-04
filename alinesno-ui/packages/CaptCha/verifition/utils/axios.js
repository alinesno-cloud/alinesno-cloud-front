import axios from 'axios'
import {getToken} from "alinesno-ui/src/utils/auth";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API

const service = axios.create({
  timeout: 40000,
  headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + getToken()
  },
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
  }
)
export default service
