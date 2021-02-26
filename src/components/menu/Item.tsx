import React,{useContext} from 'react'
import classnames from 'classnames'
import MenuContext from './MenuContext'
export interface ItemProps {
  index:number
  className?: string
  style?: React.CSSProperties
}
const Item:React.FC<ItemProps> = ({children,className,style,index})=>{
  const {onSelect,setIndex,currentIndex,mode} = useContext(MenuContext)

  const isSelected = currentIndex === index
  const classes = classnames(
    className,
    {
    'cloud-music-menu-item':mode === 'horizontal',
    'cloud-music-menu-item-vertical':mode === 'vertical',
    'cloud-music-menu-item-selected':isSelected && mode === 'horizontal',
    'cloud-music-menu-item-selected-vertical':isSelected && mode === 'vertical',
    }
    )
  return (
    <>
    <li className={classes} style={style}onClick={()=>{
      setIndex?.(index)
      onSelect?.(index)
    }}>{children}</li>
    </>
  )
}

export default Item