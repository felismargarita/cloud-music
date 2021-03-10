import React,{useContext} from 'react'
import {context} from './Context'
import classnames from 'classnames'
interface ItemProps {
  index:number
}

export type ItemComponentType = React.FC<ItemProps>

const Item:ItemComponentType = ({children,index})=>{
  const {currentIndex,setIndex,width,onChange} = useContext(context)
  const classes = classnames('cloud-music-switcher-item',{
    'cloud-music-switcher-item-selected':currentIndex === index
  })
  return (
    <div className={classes} style={{width}} onClick={()=>{
      onChange?.(index)
      setIndex?.(index)
    }}>{children}</div>
  )
}

export default Item