import React, { useState } from 'react'
import Comment from '@/components/comment/Comment'
import moment from 'moment'
import Pagination from '@/components/pagination/Pagination'
const Test = ()=>{
  const [current,setCurrent] = useState(1)
  return (
    <div>
      <Comment 
        avatar={{
          src:'/resourcebed/picture?md5=22d1678fe47060faf018da4b6f0c6783',
          size:36
        }}
        nickname="蜜桃朵朵"
        content="昨天农历八月十五中秋节 本该是一家人团圆的日子 妈妈一直等我学校能住了才放心回老家 在上海南站求了一下午您好我妈妈没文化不
        识字能不能让我把她送到车厢里我身份证压您这行吗 跑遍了半个火车站工作人员都不同意 
        眼泪止不住的流了一下午比起无助更多的是愧疚 妈妈什么都给我最好的自己却活的那么卑微"
        postTime={moment('2020-03-15 10:30:15')}
        like={123}
        referComment={{
          nickname:'这是睡啊?',
          content:'她送到车厢里我身份证压您这行吗 跑遍了半个火车站工作人员'
        }}
      />
      <Pagination  total={10000} pageSize={10} current={current} onChange={(p,s)=>setCurrent(p)}/>
    </div>
  )
}

export default Test