import React, { useState,useRef,useEffect } from 'react'
import Draggable, { DraggableEvent }  from 'react-draggable'
import _ from 'lodash'
interface BarProps {
  current:number
  total:number
  onChange?:(offset:number)=>void
}

const Bar:React.FC<BarProps> = ({current,total,onChange})=>{
  const [isHover,setHover] = useState(false)
  const [isDragging,setDragging] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const [position,setPosition] = useState<{x:number,y:number}>({x:0,y:0})
  const offset = current*100/total

  //计算初始位置
  useEffect(()=>{
    const x = barRef.current?.clientLeft || 0
    const y = barRef.current?.clientHeight || 0
    setPosition({x,y:y-4})
  },[])

  //处理拖拽
  const onDarg = (e:DraggableEvent)=>{
    setDragging(true)
    const {x} = e as MouseEvent 
    const left = barRef.current?.getBoundingClientRect().left || 0
    const width = barRef.current?.clientWidth || 0
    const right = left + width 
    if(x<left){
      setPosition({x:0,y:position.y})
    }else if(x>right){
      setPosition({x:width,y:position.y})
    }else {
      setPosition({x:x-left,y:position.y})
    }
  }

  //拖拽结束,回调事件
  const onStop = ()=>{
    const width = barRef.current?.clientWidth || 0
    const seconds = Math.floor(position.x*total/width)
    onChange?.(seconds)
    setDragging(false)
  }

  //直接点击
  const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{
    const {clientX} = e
    const left = barRef.current?.getBoundingClientRect().left || 0
    const x = clientX-left
    setPosition({x,y:position.y})
    const width = barRef.current?.clientWidth || 0
    const seconds = Math.floor(x*total/width)
    onChange?.(seconds)
  }

  const dot = isHover || isDragging
              ?
              <Draggable 
              axis="x" 
              position={position}
              onStop={onStop}
              onDrag = {onDarg}>
                  <div className="cloud-music-player-bar-dot" style={{left:`${offset}%`}}></div>
              </Draggable>
              :
              <div></div>

  return (
    <div 
    ref={barRef}
    className="cloud-music-player-bar"
    onClick={onClick}
    onMouseLeave={()=>setHover(false)} 
    onMouseEnter={()=>setHover(true)}>
      <div className="cloud-music-player-bar-over" style={{width:`${offset}%`}}></div>
      {dot}
    </div>
  )
}
export default Bar