import React from 'react'
import classnames from 'classnames'
interface DividerProps {
  voidValue?:number
  className?:string
  style?:React.CSSProperties
  height?:number
  width?:number
  direction?:'horizontal'|'vertical'
}

const Divider:React.FC<DividerProps> = ({className,style,voidValue,height,width,direction})=>{

  const classes = classnames(className,{
    'cloud-music-divider':direction === 'vertical',
    'cloud-music-divider-horizontal':direction ==='horizontal'
  })

  const innerStyle:React.CSSProperties = (
    direction === 'vertical'
    ?
    {
      marginLeft:voidValue,marginRight:voidValue,height
    }
    :
    {
      marginTop:voidValue,marginBottom:voidValue,width,height:'3px',transform:'scale(1,0.1)'
    }
  )

  return (
  <div className={classes} style={{...innerStyle,...style}}>
  </div>
  )
}
Divider.defaultProps = {
  voidValue:12,
  height:12,
  direction:'vertical'
}
export default Divider