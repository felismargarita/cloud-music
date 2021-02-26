import React from 'react'
import {CaretRightOutlined} from '@ant-design/icons'
import classnames from 'classnames'
interface StartButtonProps {
  onClick?:()=>void
  style?:React.CSSProperties
  className?:string
}

const StartButton:React.FC<StartButtonProps> = ({onClick,style,className})=>{


  const classes = classnames(className,'cloud-music-start-button')
  return (
    <div className={classes} style={style} onClick={()=>onClick?.()}>
      <CaretRightOutlined className="cloud-music-start-btn-icon"/>
    </div>
  )
}

export default StartButton