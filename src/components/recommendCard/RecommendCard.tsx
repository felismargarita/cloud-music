import React from 'react'
import Card from '@/components/card/Card'
import Statistic from './Statistic'
import StartButton from '@/components/button/StartButton'
import classnames from 'classnames'
import TextOmitBox from './TextOmitBox'
const RecommendCard = ()=>{
  const [visible,setVisible] = React.useState(false)
  const btnClasses = classnames('cloud-music-reco-btn',{
    'cloud-music-reco-btn-hidden':!visible
  })
  return (
    <>
      <Card 
      className="cloud-music-recommend-card"
      onHoverChange={v=>setVisible(v)}
      rt={<Statistic total={99999}/>}
      rb={<StartButton className={btnClasses}/>}
      >
        <img src="http://felis.top:9000/picture?md5=5df92c369f525326cc5eaee18246118e"/>
      </Card>
      <TextOmitBox 
      height={36} 
      lineHeight={18} 
      width={136} 
      content="涉及到一i写美好的数字测试内容春1111222" 
      />
    </>

  )
}

export default RecommendCard