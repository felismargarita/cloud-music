import React from 'react'
import Card from '@/components/card/Card'
import StartButton from '@/components/button/StartButton'
import TextOmitBox from '@/components/textOmit/TextOmitBox'
interface ExclusiveCardProps {
  img:string
  content:string
}

const ExclusiveCard:React.FC<ExclusiveCardProps> = ({img,content})=>{

  const style:React.CSSProperties = {height:'24px',width:'24px',fontSize:'12px'}

  return (
    <div>
      <Card className="cloud-music-exclusive-card" lt={<div style={{margin:'8px'}}><StartButton style={style}/></div>}>
        <img src={img}/>
      </Card>
      <TextOmitBox 
      content={content}
      height={36} 
      lineHeight={18} 
      width={242} 
      />
    </div>
  )
}

export default ExclusiveCard