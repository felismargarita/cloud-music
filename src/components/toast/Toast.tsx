import React,{useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import ToastIcon from './ToastIcon'
interface ToastProps {
  content:React.ReactNode
  duaration?:number
  uniqueKey?:string
  destorySelf?:(levelAction:()=>void)=>void
}
const transitionTime = 200 //动画时间 单位(毫秒)
const Toast:React.FC<ToastProps> = ({content,destorySelf})=>{
  const [className,setClassName] = useState('cloud-music-toast')
  useEffect(()=>{
    setClassName(classnames('cloud-music-toast','cloud-music-toast-display'))
    destorySelf?.(()=>setClassName('cloud-music-toast'))
  },
  [])

  return (
    <div className="cloud-music-toast-container">
      <div className={className} style={{transition:`opacity ${transitionTime/1000}s`}}>{content}</div>
    </div>
  )
}

const nodeList:{
  key:string,
  div:HTMLDivElement
  timer:any
  destoryCb:()=>void
}[] = []

const toast = (props:ToastProps)=>{
  const {content,duaration=1500,uniqueKey} = props
  const div = document.createElement('div')

  const destory = (cb:()=>void)=>{
    const leave = ()=>{
      const timer = setTimeout(()=>{
        cb()
        setTimeout(()=>{
          ReactDOM.unmountComponentAtNode(div)
          if(uniqueKey){
            const index = nodeList.findIndex(d=>d.key === uniqueKey)
            index > -1 && nodeList.splice(index,1)
          }
        },transitionTime)
      },duaration)
      return {timer,div}
    }
    if(uniqueKey){
      nodeList.push({key:uniqueKey,destoryCb:cb,...leave()})
    }else{
      leave()
    }
  }
  const renderNode = ()=>{
    document.body.appendChild(div)
    ReactDOM.render(<Toast content={content} destorySelf={destory}/>,div)
  }

  if(uniqueKey){
    const index = nodeList.findIndex(d=>d.key === uniqueKey)
    if(index>-1){
      const node  = nodeList[index]
      const {timer,destoryCb,div} = node
      clearTimeout(timer) //清理定时器
      node.timer = setTimeout(()=>{
        destoryCb()
        setTimeout(()=>{
          ReactDOM.unmountComponentAtNode(div)
          const index = nodeList.findIndex(d=>d.key === uniqueKey)
          index > -1 && nodeList.splice(index,1)
        },transitionTime)
      },duaration)
    }else{
      renderNode()
    }
  }else{
    renderNode()
  }

}

export default {
  error:(props:ToastProps)=>{
    const {content,...rest} = props
    toast({
      content:(
        <div className=""><ToastIcon type="error"/>
          <div className="cloud-music-toast-content">
            {content}
          </div>
        </div>
      ),
      ...rest
    })
  },
  toast
}