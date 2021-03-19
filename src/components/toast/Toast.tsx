import React,{useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import ToastIcon from './ToastIcon'
interface ToastProps {
  content:React.ReactNode
  duaration?:number
  uniqueKey?:string
}


const transitionTime = 200 //动画时间
const divList:{
  key:string,
  div:HTMLDivElement
  timer:any
}[] = []

const Toast:React.FC<ToastProps> = ({content,duaration,uniqueKey})=>{
  const [className,setClassName] = useState('cloud-music-toast')
  const lastUmountTimerRef = useRef<any>()
  useEffect(()=>{
    setClassName(classnames('cloud-music-toast','cloud-music-toast-display'))
    //保留timer
    if(uniqueKey){
      const div = divList.find(d=>d.key === uniqueKey)
      lastUmountTimerRef.current = div?.timer
    }
    setTimeout(() => {
      if(uniqueKey){
      //重定位timer
        const currentDiv = divList.find(d=>d.key === uniqueKey)
        console.log(currentDiv,lastUmountTimerRef)
        if(currentDiv?.timer !== lastUmountTimerRef.current){
          lastUmountTimerRef.current === currentDiv?.timer
          return
        }
      }
      setClassName('cloud-music-toast')
    }, duaration);
  },
  [])

  return (
    <div className="cloud-music-toast-container">
      <div id={uniqueKey} className={className} style={{transition:`opacity ${transitionTime/1000}s`}}>{content}</div>
    </div>
  )
}

const toast = (props:ToastProps)=>{
  const {content,duaration=2000,uniqueKey} = props
  const div = document.createElement('div')
  const umountNode = ()=>{
    let uDiv = div
    if(uniqueKey){
      const node = divList.find(d=>d.key === uniqueKey)
      if(node){
        uDiv = node.div
      }
    }
    const t = setTimeout(()=>{
      ReactDOM.unmountComponentAtNode(uDiv)
      if(uniqueKey){
        const index = divList.findIndex(d=>d.key === uniqueKey)
        divList.splice(index,1)//删除掉这个节点
      }
    },duaration+transitionTime)//动画结束时将节点移除
    return t
  }
  const renderNode = ()=>{
    document.body.appendChild(div)
    ReactDOM.render(<Toast content={content} duaration={duaration} uniqueKey={uniqueKey}/>,div)
  }

  if(uniqueKey){
    const node = divList.find(d=>d.key === uniqueKey)
    //如果这个key的div存在则立即替换掉这个timer,如果不存在则推入列表
    if(node){
      clearTimeout(node.timer)
      node.timer = umountNode()
    }else{
      divList.push({key:uniqueKey,div,timer:umountNode()})
      renderNode()
    }
  }else{
    renderNode()
    umountNode()
  }
}

export default {
  error:(props:ToastProps)=>{
    const {content,...rest} = props
    toast({
      content:<div className=""><ToastIcon type="error"/>{content}</div>,
      ...rest
    })
  },
  toast
}