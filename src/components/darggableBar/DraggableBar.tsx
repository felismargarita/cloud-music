import React,{useState,useEffect} from 'react'
import classnames from 'classnames'
import useDom from '@/hooks/useDom'
import Draggable, { DraggableEvent }  from 'react-draggable'
import _ from 'lodash'

interface DraggableBarProps {
    value?:number
    range?:[number,number]
    onChange?:(value:number)=>void
    onDraggingChange?:(value:number)=>void
    className?:string
    style?:React.CSSProperties
}
const DraggableBar:React.FC<DraggableBarProps> = ({className,value,range,onChange,onDraggingChange,style})=>{
    const [barDom,barRef] = useDom<HTMLDivElement>()
    const [isHover,setHover] = useState(false)
    const [isDragging,setDragging] = useState(false)
    const [position,setPosition] = useState<{x:number,y:number}>({x:0,y:0})
    const classes = classnames('cloud-music-draggable-bar',className)

    const width = barDom?.clientWidth || 0 //滑轨的宽度
    const left = barDom?.getBoundingClientRect().left || 0 //滑轨最左端距离视口最左端的距离
    const total = range ? range[1]- range[0] : 100
    const theValue = value ? value : 0
    //计算初始位置
    useEffect(()=>{
      const x = barDom?.clientLeft || 0
      const y = barDom?.clientHeight || 0
      setPosition({x,y:y-4})
    },[])

    //处理移动红点
    useEffect(()=>{
        if(!isDragging){
        setPosition({x:theValue*width/total,y:position.y})
        }
    },[value,isDragging])

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
        const draggingValue = Math.ceil(total*(position.x/width))
        onDraggingChange?.(draggingValue)
    }

    //拖拽结束,回调事件
    const onStop = ()=>{
        const finalValue = Math.floor(position.x*total/width)
        onChange?.(finalValue)
        setDragging(false)
    }

    //直接点击
    const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{
        const {clientX} = e
        const x = clientX-left
        setPosition({x,y:position.y})
        const clickValue = Math.floor(x*total/width)
        onChange?.(clickValue)
    }

    const dot = isHover || isDragging
                ?
                <Draggable 
                axis="x" 
                bounds={{top:position.y,bottom:0,left:0,right:width}}
                position={position}
                onStop={onStop}
                onDrag={onDarg}>
                    <div className="cloud-music-draggable-bar-dot"></div>
                </Draggable>
                :
                <div></div>

    return (
        <div 
            ref={barRef}
            style={style}
            className={classes}
            onClick={onClick}
            onMouseLeave={()=>setHover(false)} 
            onMouseEnter={()=>setHover(true)}>
            <div className="cloud-music-draggable-bar-over" style={{width:position.x}}></div>
          {dot}
        </div>
    )
}

DraggableBar.defaultProps = {
    range:[1,100]
}
export default DraggableBar