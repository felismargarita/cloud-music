import React from 'react'
import classnames from 'classnames'
interface ItemProps {
  onClick?:()=>void
  className?:string
  style?:React.CSSProperties
}

export type ItemComponentType = React.FC<ItemProps> 

const Item:ItemComponentType = ({children,onClick,className,style,...rest})=>{

  const classes = classnames('cloud-music-list-item',className)
  return (
    <div className={classes} {...rest} style={style}>{children}</div>
  )
}

export default Item