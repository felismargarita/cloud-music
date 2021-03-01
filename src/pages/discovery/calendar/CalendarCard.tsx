import React from 'react'
import Card from '@/components/card/Card'
import {Moment} from 'moment'
import Drawer from '@/components/drawer/Drawer'
interface CalendarCardProps {
    time:Moment
}

const CalendarCard:React.FC<CalendarCardProps> = ({time})=>{

    const [isHover,setIsHover] = React.useState(false)

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
    <Card className="cloud-music-calendar-card" 
        onHoverChange={v=>setIsHover(v)}
        top={dra}
        center={calendar}>
        <div></div>
    </Card>
    )
}

export default CalendarCard