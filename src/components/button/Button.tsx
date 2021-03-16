import React from 'react'
import classnames from 'classnames'
interface ButtonProps {
  type?:'default'|'round'
  className?:string
}

const Button:React.FC<ButtonProps> = ({children,type,className})=>{
  const classes = classnames(
    className,
    'cloud-music-button',
    {
        'cloud-music-button-round':type === 'round'
    }
  )

  return <div className={classes}>{children}</div>
}

export default Button