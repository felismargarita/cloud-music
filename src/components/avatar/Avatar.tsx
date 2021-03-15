import React from 'react'
import classnames from 'classnames'
export interface AvatarProps {
  size?:number,
  src:string
  className?:string
}

const Avatar:React.FC<AvatarProps> = ({src,size,className})=>{
  const classes = classnames('cloud-music-avatar',className)
  return (
    <div className={classes} style={{height:size,width:size}}>
      <img style={{width:'100%',height:'100%'}} src={src}/>
    </div>
  )
}

Avatar.defaultProps = {
  size:50
}

export default Avatar