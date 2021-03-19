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
        toast.toast({content:new Date().getTime(),duaration:1500})
      }}>测试toast</Button>
    </div>
  )
}

export default Test