import React from 'react'
import classnames from 'classnames'
import Loading from '@/components/loading/Loading'
interface ButtonProps {
  type?:'default'|'round'
  plain?:boolean
  className?:string
  onClick?:()=>void
  loading?:boolean
}

const Button:React.FC<ButtonProps> = ({children,type,className,plain,onClick,loading})=>{
  const classes = classnames(
    className,
    'cloud-music-button',
    {
        'cloud-music-button-round':type === 'round',
        'cloud-music-button-round-plain':plain
    }
  )

  const loadIcon = (
    loading ? <Loading style={{color:'#fff'}} content=""/> : ''
  ) 

  return <div className={classes} onClick={()=>onClick?.()}>{loadIcon}{children}</div>
}

export default Button