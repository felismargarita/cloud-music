import React from 'react'

interface AvatarProps {
  size?:number,
  src:string
}

const Avatar:React.FC<AvatarProps> = ({src,size})=>{

  return (
    <div className="cloud-music-avatar" style={{height:size,width:size}}>
      <img style={{width:'100%',height:'100%'}} src={src}/>
    </div>
  )
}

Avatar.defaultProps = {
  size:50
}

export default Avatar