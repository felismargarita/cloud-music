import React from 'react'
import isFirefox from '@/utils/isFirefox'
interface TextOmitBoxProps {
  height:number //容器高度
  width:number //容器宽度
  content:string  //文字内容
  lineHeight?:number //文字行高
}

const TextOmitBox:React.FC<TextOmitBoxProps> = ({height,lineHeight,width,content})=>{
  const containerRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [str,setStr] = React.useState('')
  const loopRef = React.useRef(0)
  const finishRef = React.useRef(false)
  React.useEffect(()=>{
    if(finishRef.current){
      return
    }
    let innerScrollHeight= innerRef.current?.scrollHeight
    let containerOffsetHeight = containerRef.current?.offsetHeight
    if((innerScrollHeight || innerScrollHeight===0) && containerOffsetHeight){
      loopRef.current++
      if(isFirefox()){
        innerScrollHeight --
      }
      if(innerScrollHeight<=containerOffsetHeight){
        const tmpStr = content.slice(0,loopRef.current)
        if(loopRef.current === content.length){
          setStr(tmpStr)
          finishRef.current = true
        }else{
          setStr(tmpStr+'…')
        }
      }else{
        const tmpStr = content.slice(0,loopRef.current-2) + '…'
        setStr(tmpStr)
        finishRef.current = true
      }
    }
  },[str])

  //在渲染成功前需要posiiton:'fixed',使容器脱离文档流,防止出现一些特殊情况下的闪屏
  const style:React.CSSProperties = {height,width,overflowWrap:'break-word'} 
  const containerStyle:React.CSSProperties = finishRef.current 
  ? 
  style
  : 
  {...style,position:'fixed'}
  return (
  <div style={containerStyle} ref={containerRef}>
    <div style={{lineHeight:lineHeight+'px',opacity:finishRef.current ? 1 : 0}} ref={innerRef}>
      {str}
    </div>
  </div>)
}

export default TextOmitBox