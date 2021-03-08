import React, { useState,useRef,useEffect } from 'react'
import Draggable, { DraggableEvent }  from 'react-draggable'
import _ from 'lodash'
import moment from 'moment'

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

  const width = barRef.current?.clientWidth || 0 //滑轨的宽度
  const left = barRef.current?.getBoundingClientRect().left || 0 //滑轨最左端距离视口最左端的距离
  
  //计算初始位置
  useEffect(()=>{
    const x = barRef.current?.clientLeft || 0
    const y = barRef.current?.clientHeight || 0
    setPosition({x,y:y-4})
  },[])

  //处理移动红点
  useEffect(()=>{
    if(!isDragging){
      setPosition({x:current*width/total,y:position.y})
    }
  },[current,isDragging])

  //处理拖拽
  const onDarg = (e:DraggableEvent)=>{
    setDragging(true)
    const {x} = e as MouseEvent 
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
    const seconds = Math.floor(position.x*total/width)
    onChange?.(seconds)
    setDragging(false)
  }

  //直接点击
  const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{
    const {clientX} = e
    const x = clientX-left
    setPosition({x,y:position.y})
    const seconds = Math.floor(x*total/width)
    onChange?.(seconds)
  }

  const dot = isHover || isDragging
              ?
              <Draggable 
              axis="x" 
              bounds={{top:position.y,bottom:0,left:0,right:width}}
              position={position}
              onStop={onStop}
              onDrag = {onDarg}>
                  <div className="cloud-music-player-bar-dot"></div>
              </Draggable>
              :
              <div></div>

  const draggingTime = Math.ceil(total*(position.x/width))            
  return (
    <div className="cloud-music-player-time-bar">
    <div className="cloud-music-player-time">{moment(isDragging ? draggingTime*1000 : current*1000).format('mm:ss')}</div>
      <div 
      ref={barRef}
      className="cloud-music-player-bar"
      onClick={onClick}
      onMouseLeave={()=>setHover(false)} 
      onMouseEnter={()=>setHover(true)}>
        <div className="cloud-music-player-bar-over" style={{width:position.x}}></div>
        {dot}
      </div>
    <div className="cloud-music-player-time">{moment(total*1000).format('mm:ss')}</div>
  </div>

  )
}
export default Bar