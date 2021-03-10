import React, { useState } from 'react'
import Item,{ItemComponentType} from './Item'
import {context} from './Context'
import classnames from 'classnames'
interface SwtichButtonProps {
  width?:number
  defaultIndex?:number
  onChange?:(index:number)=>void
  className?:string
}

type SwtichButtonType = React.FC<SwtichButtonProps> & {Item : ItemComponentType}

const SwtichButton:SwtichButtonType = ({children,width,defaultIndex,onChange,className})=>{
  const [index,setIndex] = useState(defaultIndex || 0)
  const count = React.Children.count(children)
  const classes = classnames('cloud-music-switcher-button',className)
  return (
    <div className={classes} style={{width:(width || 0)*count}}>
      <context.Provider value={{currentIndex:index,setIndex,width,onChange}}>
        {
          React.Children.map(children,child=>child)
        }
      </context.Provider>
    </div>
  )
}
SwtichButton.defaultProps = {
  width:108,
  defaultIndex:0
}
SwtichButton.Item = Item

export default SwtichButton