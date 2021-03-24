import React from 'react'
import {GithubFilled} from '@ant-design/icons'
const Github = ()=>{
  return (
    <GithubFilled className="github-icon" onClick={()=>{
      window.open('https://github.com/felismargarita/cloud-music')
    }}/>
  )
}
export default Github