import React from 'react'
import Card from '@/components/card/Card'
import Drawer from '@/components/drawer/Drawer'
import Statistic from '@/components/statistic/Statistic'
import TextOmitBox from '@/components/textOmit/TextOmitBox'
interface RecoMvProps {
  playCount:number
  desc:string
  from:string
  img:string
}

const RecoMv:React.FC<RecoMvProps> = ({playCount,desc,from,img})=>{

  const [visible,setVisible] = React.useState(false)

  return (
    <div>
      <Card
        className="cloud-music-mv-card"
        onHoverChange={v=>setVisible(v)}
        rt={<Statistic total={playCount}/>}
        top={<Drawer className="cloud-music-mv-drawer" visible={visible} content="最新最热MV推荐" delay={1000}/>}
      >
        <img src={img}/>
      </Card>
      <div style={{marginTop:'8px'}}>
        <TextOmitBox
          content={desc}
          height={18} 
          lineHeight={18} 
          width={242} 
        />
        <div className="cloud-music-mv-from">{from}</div>
      </div>
    </div>
  )
}

export default RecoMv