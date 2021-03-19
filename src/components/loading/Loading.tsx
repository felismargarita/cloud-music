import React from 'react'
import Icon from '@/components/icons/Icon'
interface LoadingProps {
  content?:string
  className?:string
  style?:React.CSSProperties
}

const Loading:React.FC<LoadingProps> = ({content,className,style})=>{


  return (
    <span className="cloud-music-loading">
      <Icon className="cloud-music-loading-icon" style={style} type="loading"/>
      <span>{content}</span>
    </span>
  )
}
Loading.defaultProps = {
  content:'载入中'
}

export default Loading