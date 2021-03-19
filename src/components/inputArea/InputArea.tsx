import React, { ChangeEvent } from 'react'
import classnames from 'classnames'
interface InputAreaProps {
  className?:string
  style?:React.CSSProperties
  onChange?:(e:ChangeEvent<HTMLTextAreaElement>)=>void
  value?:undefined|string
  placeholder?:string
}

const InputArea:React.FC<InputAreaProps> = ({className,style,placeholder,onChange,value})=>{
  const classes = classnames('cloud-music-input-area',className)
  return (
    <textarea 
      value={value}
      onChange={onChange} 
      placeholder={placeholder} 
      style={style} 
      className={classes}>
    </textarea>
  )
}

export default InputArea