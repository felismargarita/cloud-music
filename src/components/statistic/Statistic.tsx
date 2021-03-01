import React from 'react'
import {CaretRightOutlined} from '@ant-design/icons'
import numberFormatter from '@/utils/numberFormatter'
interface StatisticProps {
  total:number
  style?:React.CSSProperties
}

const Statistic:React.FC<StatisticProps> = ({total,style})=>{

  return (
    <div className="cloud-music-statistic" style={style}>
      <CaretRightOutlined className="cloud-music-statistic-icon"/>
      {numberFormatter(total)}
    </div>
  )
}

export default Statistic