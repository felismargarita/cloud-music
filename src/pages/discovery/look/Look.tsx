import React from 'react'
import Card from '@/components/card/Card'
import Avatar from '@/components/avatar/Avatar'
import Statistic from '@/components/statistic/Statistic'
import TextOmitBox from '@/components/textOmit/TextOmitBox'
interface LookProps {
  avatar:string
  from:string
  playCount:number
  img:string
  desc:string
}

const Look:React.FC<LookProps> = ({avatar,from,playCount,img,desc})=>{

  const lb = (
    <div className="cloud-muisc-look-from">
      <Avatar src={avatar} size={25}/>
      <div className="cloud-muisc-look-name">{from}</div>
    </div>
  )


  return (
    <div>
      <Card className="cloud-muisc-look-card" isZoomin lb={lb} rt={<Statistic total={playCount}/>}>
        <img src={img}/>
      </Card>
      <div style={{marginTop:'8px'}}>
        <TextOmitBox 
        content={desc}
        height={36} 
        lineHeight={18} 
        width={177} 
        />
      </div>
    </div>
  )
}

export default Look