import React,{useState} from 'react'
import Item,{ItemProps} from './Item'
import MenuContext from './MenuContext'
import classnames from 'classnames'
import {CaretRightOutlined,CaretDownOutlined} from '@ant-design/icons'
interface MenuProps {
  mode?:'horizontal'|'vertical'
  title?:string
  closeable?:boolean
  className?: string
  style?: React.CSSProperties
  onSelect?:(index:React.Key)=>void
}


const Menu:React.FC<MenuProps> & {Item:React.FC<ItemProps>}= ({children,onSelect,mode,title,closeable})=>{
  const [current,setIndex] = useState(1)
  const [close,setClose] = useState(false)
  const classes = classnames('cloud-music-menu',{
    'cloud-music-menu-vertical' : mode === 'vertical'
  })

  const handleClickTitle = ()=>{
    if(closeable){
      setClose(!close)
    }
  }
  return (
    <>
    {
      title && mode ==='vertical' 
      ?
      <div 
      onClick={handleClickTitle} 
      style={{cursor:closeable ? 'pointer' : 'default'}} 
      className="cloud-music-menu-title">{title}
      {
        closeable 
        ?
        (        
          close ? <CaretRightOutlined className="cloud-music-menu-title-icon"/> : <CaretDownOutlined className="cloud-music-menu-title-icon"/>
        )
        :
        null
      }
      </div> 
      :
      null
    }
    {
      close 
      ?
      null
      :
      <ul className={classes}>
        <MenuContext.Provider value={{onSelect,currentIndex:current,setIndex,mode}}>
          {children}
        </MenuContext.Provider>
      </ul>
    }
    </>


  )
}

Menu.Item = Item

Menu.defaultProps = {
  mode:'horizontal',
}

export default Menu