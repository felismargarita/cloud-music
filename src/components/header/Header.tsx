import React from 'react'
import {RightOutlined} from '@ant-design/icons'
interface HeaderProps {
  content:string
  onClick?:()=>void
}

const Header:React.FC<HeaderProps> = ({content,onClick})=>{

  return (
    <div 
    className="cloud-music-header"
    onClick={()=>onClick?.()} 
    >
      {content}<RightOutlined className="cloud-music-header-icon"/>
    </div>
  )
}

export default Header