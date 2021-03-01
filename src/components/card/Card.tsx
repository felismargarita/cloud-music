import React,{cloneElement} from 'react'
import classnames from 'classnames'
interface CardProps {
  top?:React.ReactElement
  bottom?:React.ReactElement 
  left?:React.ReactElement 
  right?:React.ReactElement 
  lt?:React.ReactElement
  lb?:React.ReactElement
  rt?:React.ReactElement
  rb?:React.ReactElement
  center?:React.ReactElement
  className?:string
  onHoverChange?:(isHover:boolean)=>void
  isZoomin?:boolean
}

type PlacementType = 'top'|'bottom'|'left'|'right'|'lt'|'lb'|'rt'|'rb'|'center'

const getNodeSytle = (node:React.ReactElement)=>{
  const style = node.props.style
  return style || {}
}
const placementStyles = {
  top:{ left:0,right:0,marginLeft:'auto',marginRight:'auto',top:0 },
  bottom:{ left:0,right:0,marginLeft:'auto',marginRight:'auto',bottom:0 },
  left:{ top:0,bottom:0,marginTop:'auto',marginBottom:'auto',left:0 },
  right:{ top:0,bottom:0,marginTop:'auto',marginBottom:'auto',right:0 },
  lt:{ left:0, top:0},
  lb:{ left:0, bottom:0},
  rt:{ right:0, top:0},
  rb:{ right:0, bottom:0},
  center:{ top:0, bottom:0, left:0 ,right:0, margin:'auto'}
}

const elementProcessor = (ele?:React.ReactElement,placement?:PlacementType)=>{
  if(!(ele && placement)){
    return null
  }
 return  cloneElement(ele,{
    style:{
      position:'absolute',
      zIndex:100,
      ...getNodeSytle(ele),
      ...placementStyles[placement]
    }
  })
}

const Card:React.FC<CardProps> = ({lt,lb,rt,rb,top,bottom,right,left,center,children,className,onHoverChange,isZoomin})=>{

  const zoomClasses = classnames({
    'cloud-music-card-zoom':isZoomin
  })
  return (
  <div 
  className={classnames('cloud-music-card',className)} 
  onMouseLeave={()=>onHoverChange?.(false)}
  onMouseEnter={()=>onHoverChange?.(true)}>
    {elementProcessor(top,'top')}
    {elementProcessor(bottom,'bottom')}
    {elementProcessor(left,'left')}
    {elementProcessor(right,'right')}
    {elementProcessor(lt,'lt')}
    {elementProcessor(lb,'lb')}
    {elementProcessor(rt,'rt')}
    {elementProcessor(rb,'rb')}
    {elementProcessor(center,'center')}
    {React.cloneElement(children as React.ReactElement,{
      style:{height:'100%',width:'100%'},
      className:zoomClasses
      })}
  </div>)

}

export default Card