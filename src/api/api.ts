import axios from 'axios'
import urls from './urls'
import {message} from 'antd'
import {history} from 'umi'
const service = axios.create({
  baseURL: urls.SERVER, // api的base_url,
})


// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.info
    }else {
      message.error(res.msg)
      return Promise.reject(res)
    }
  },
  error => {
    message.error(error.msg||'系统超时,请稍后再试')
    return Promise.reject(error)
  }
);
export default service

