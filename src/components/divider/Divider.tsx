import React from 'react'
import classnames from 'classnames'
interface DividerProps {
  voidValue?:number
  className?:string
  style?:React.CSSProperties
  height?:number
}

const Divider:React.FC<DividerProps> = ({className,style,voidValue,height})=>{

  const classes = classnames('cloud-music-divider',className)

  return (
  <div className={classes} style={{marginLeft:voidValue,marginRight:voidValue,height,...style}}>
  </div>
  )
}
Divider.defaultProps = {
  voidValue:12,
  height:12
}
export default Divider