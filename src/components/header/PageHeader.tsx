import React from 'react'
import {RightOutlined} from '@ant-design/icons'
interface HeaderProps {
  content:string
  onClick?:()=>void
  pure?:boolean
}

const Header:React.FC<HeaderProps> = ({content,onClick,pure})=>{

  return (
    <div 
    className="cloud-music-page-header"
    onClick={()=>onClick?.()} 
    >
      {content}{pure ? null : <RightOutlined className="cloud-music-page-header-icon"/>}
    </div>
  )
}

export default Header