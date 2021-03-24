import React from 'react'
import {GithubFilled} from '@ant-design/icons'
const Logo:React.FC<{}> = ()=>{


  return (
    <div className="cloud-music-header-logo">
      <GithubFilled className="cloud-music-header-icon" onClick={()=>{
        window.open('https://github.com/felismargarita/cloud-music')
      }}/>
      <span className="cloud-music-header-text">网易云音乐</span>
    </div>
  )
}

export default Logo