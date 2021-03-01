import React from 'react'
import Card from '@/components/card/Card'
import Statistic from '@/components/statistic/Statistic'
import StartButton from '@/components/button/StartButton'
import classnames from 'classnames'
import TextOmitBox from '@/components/textOmit/TextOmitBox'


interface RecommendCardProps {
  img:string
  playCount:number
  content:string
}

const RecommendCard:React.FC<RecommendCardProps> = ({img,playCount,content})=>{
  const [visible,setVisible] = React.useState(false)
  const btnClasses = classnames('cloud-music-reco-btn',{
    'cloud-music-reco-btn-hidden':!visible
  })
  return (
    <div>
      <Card 
      className="cloud-music-recommend-card"
      onHoverChange={v=>setVisible(v)}
      rt={<Statistic total={playCount}/>}
      rb={<StartButton className={btnClasses}/>}
      >
        <img src={img}/>
      </Card>
      <TextOmitBox 
      height={36} 
      lineHeight={18} 
      width={136} 
      content={content}
      />
    </div>

  )
}

export default RecommendCard