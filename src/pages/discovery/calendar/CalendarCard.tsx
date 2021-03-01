import React from 'react'
import Card from '@/components/card/Card'
import {Moment} from 'moment'
import Drawer from '@/components/drawer/Drawer'
import TextOmitBox from '@/components/textOmit/TextOmitBox'
import StartButton from '@/components/button/StartButton'
import classnames from 'classnames'
interface CalendarCardProps {
    time:Moment
}

const CalendarCard:React.FC<CalendarCardProps> = ({time})=>{

    const [isHover,setIsHover] = React.useState(false)
    const btnClasses = classnames('cloud-music-reco-btn',{
        'cloud-music-reco-btn-hidden':!isHover
      })
    const calendar = (
        <div className="cloud-music-calendar">
            <div className="cloud-music-calendar-number">
                {time.get('D')}
            </div>
        </div>
    )
    const dra = (
        <Drawer 
        visible={isHover}
        delay={1000}
        content="根据您的音乐口味生成每日更新"
        />
    )

    

    return (
        <div>
        <Card 
            className="cloud-music-calendar-card" 
            onHoverChange={v=>setIsHover(v)}
            top={dra}
            rb={<StartButton className={btnClasses}/>}
            center={calendar}>
            <div></div>
        </Card>
        <div style={{marginTop:'8px'}}>
            <TextOmitBox 
                content="每日歌曲推荐"       
                height={36} 
                lineHeight={18} 
                width={136} />
        </div>
        </div>

    )
}

export default CalendarCard