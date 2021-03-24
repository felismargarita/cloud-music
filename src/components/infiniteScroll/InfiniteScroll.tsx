import React,{useRef,useEffect} from 'react'


interface InfiniteScrollProps {
  hasMore?:boolean
  loadMore?:()=>void
}

const sensetivePixels = 4 //像素敏感度 (有时候会有触底计算公式会有略微的几个像素差异) 

const InfiniteScroll:React.FC<InfiniteScrollProps> = ({children,loadMore,hasMore})=>{
  const ref = useRef<HTMLDivElement>(null)
  const triggerHeightRef = useRef<number>(0)
  useEffect(()=>{
    if(ref.current){
      ref.current.onscroll=()=>{
        const scrollTop = ref.current?.scrollTop || 0
        const clientHeight = ref.current?.clientHeight || 0
        const scrollHeight = ref.current?.scrollHeight || 0
        if(scrollTop + clientHeight + sensetivePixels >= scrollHeight){
          if(hasMore && scrollHeight !== triggerHeightRef.current){
            triggerHeightRef.current = scrollHeight
            loadMore?.()
          }
        }
      }
    }
    return ()=>{
      if(ref.current){
        ref.current.onscroll=()=>null
      }
    }
  },[loadMore,hasMore])


  return (<div ref={ref} style={{height:496}} className="cloud-music-infinite-scroll">{children}</div>)
}

export default InfiniteScroll