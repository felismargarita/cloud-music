import React from 'react'
import Icon from '@/components/icons/Icon'
interface LoadingProps {
  content?:string
}

const Loading:React.FC<LoadingProps> = ({content})=>{


  return (
    <span className="cloud-music-loading">
      <Icon className="cloud-music-loading-icon" type="loading"/>
      <span>{content}</span>
    </span>
  )
}
Loading.defaultProps = {
  content:'载入中'
}

export default Loading