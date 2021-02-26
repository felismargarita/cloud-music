import React from 'react'
interface TextOmitBoxProps {
  height:number
  lineHeight:number
  width:number
  content:string
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
    const innerScrollHeight= innerRef.current?.scrollHeight
    const containerOffsetHeight = containerRef.current?.offsetHeight
    if((innerScrollHeight || innerScrollHeight===0) && containerOffsetHeight){
      loopRef.current++
      if(innerScrollHeight<containerOffsetHeight){
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

  return (
  <div style={{height,width,overflowWrap:'break-word'}} ref={containerRef}>
    <div style={{lineHeight:lineHeight+'px',opacity:finishRef.current ? 1 : 0}} ref={innerRef}>
      {str}
    </div>
  </div>)
}

export default TextOmitBox