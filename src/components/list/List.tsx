import React from 'react'
import Item,{ItemComponentType} from './Item'
import classnames from 'classnames'
interface ListProps {
   className?:string
   style?:React.CSSProperties
}

type ListComponentType = React.FC<ListProps> & {Item : ItemComponentType}

const List:ListComponentType = ({children,className,style})=>{
  const classes = classnames('cloud-music-list',className)
  return (
    <div className={classes} style={style}>
      {
        React.Children.map(children,(child,index)=>{
          let innerStyle = index%2 === 0 ? {background:'#F9F9F9'} : {background:'#fff'}
          return React.cloneElement(child as React.ReactElement,{style:innerStyle})
        })
      }
    </div>
  )
}

List.Item = Item

export default List