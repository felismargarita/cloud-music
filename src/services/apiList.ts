import api from '@/api/api'
const getMyList = ()=>{
  return api({url:'/song/all'})
}

export {getMyList}