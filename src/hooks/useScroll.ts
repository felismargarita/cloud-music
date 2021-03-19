import { useEffect } from "react"

export default (callback:(visible:boolean)=>void,target:()=>HTMLElement,scrollHeight = 400)=>{
  useEffect(()=>{
    const element = target()
    element.onscroll = ()=>{
      if(element.scrollTop >= scrollHeight){
        callback(true)
      }else{
        callback(false)
      }
    }
    return () => {
      element.onscroll = null
    }
  },[])
}