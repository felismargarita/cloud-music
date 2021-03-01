import React from 'react'
import Card from '@/components/card/Card'
import StartButton from '@/components/button/StartButton'

interface NewestMusicProps {
  img:string
  title:string
  singer:string
}

const NewestMusic:React.FC<NewestMusicProps> = ({img,title,singer})=>{


  return (
    <div className="cloud-muisc-newest-card-cotainer" style={{marginBottom:'8px'}}>
      <Card 
      className="cloud-muisc-newest-card"
      center={<StartButton className="cloud-muisc-newest-btn"/>}
      >
        <img src={img}/>
      </Card>
      <div className="cloud-muisc-newest-info">
        <div className="cloud-muisc-newest-title">{title}</div>
        <div className="cloud-muisc-newest-singer">{singer}</div>
      </div>
    </div>

  )
}

export default NewestMusic