import React from 'react'

interface ContentProps {}

const Content:React.FC<ContentProps> = ({children})=>{


  return (
    <div className="cloud-music-content">
      {children}
    </div>
  )
}

export default Content