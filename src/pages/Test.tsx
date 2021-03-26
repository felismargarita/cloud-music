import React, { useState } from 'react'
import Dots from '@/components/carousel/dots/Dots'
const Test = ()=>{
  const [current,setCurrent] = useState(0)
  return (
    <div>
      <Dots count={9} current={current} onChange={i=>setCurrent(i)}/>
    </div>
  )
}

export default Test