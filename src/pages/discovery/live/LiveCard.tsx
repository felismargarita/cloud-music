import React from 'react'
import Card from '@/components/card/Card'
interface LiveCardProps {
  img:string
  from:string
  desc:string
}

const LiveCard:React.FC<LiveCardProps> = ({img,from,desc})=>{


  return (
    <div>
      <Card className="cloud-music-live-card" lb={<div className="cloud-music-live-card-from">{from}</div>}>
        <img src={img}/>
      </Card>
      <div className="cloud-music-live-card-desc">{desc}</div>
    </div>
  )
}

export default LiveCard