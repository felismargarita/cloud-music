import React, { useState } from 'react'
import Comment from '@/components/comment/Comment'
import moment from 'moment'
import Pagination from '@/components/pagination/Pagination'
import Button from '@/components/button/Button'
import toast from '@/components/toast/Toast'
const Test = ()=>{
  const [current,setCurrent] = useState(1)
  return (
    <div>
      <Button onClick={()=>{
        toast.warn({content:'123333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333'})
      }}>测试toast warn</Button>
            <Button onClick={()=>{
        toast.info({content:new Date().getTime()})
      }}>测试toast info</Button>
            <Button onClick={()=>{
        toast.success({content:new Date().getTime()})
      }}>测试toast success</Button>
            <Button onClick={()=>{
        toast.error({content:new Date().getTime()})
      }}>测试toast error</Button>
    </div>
  )
}

export default Test