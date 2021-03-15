import React,{useCallback, useEffect, useRef, useState} from 'react'
import useSong from '@/hooks/useSong'
import useAudio from '@/hooks/useAudio'
import classnames from 'classnames'
import moment from 'momnet'

const getSeconds = (timestamp:string)=>{
    const time = moment(timestamp,'mm:ss')
    const mins = time.minutes()
    const seconds = time.seconds()
    return mins*60+seconds
}

const Lyric = ()=>{
  const {song} = useSong()
  const {currentTime} = useAudio()
  const  ref = useRef<HTMLDivElement>(null)
  const timer = useRef<any>()
  const [scrolling,setScrolling] = useState(false)
  const [index,setIndex] = useState(0) //当前的歌词的索引
  const sentences = song?.lyric?.split(/\r/).map(sentence=>{
    const [,timestamp,content] = sentence.split(/\[|\]/)
    return {timestamp,content}
  })
  //处理滚动防抖,停止滚都后2s钟视为滚动结束
  useEffect(()=>{
    ref.current?.addEventListener('scroll',()=>{
      setScrolling(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(()=>{
        setScrolling(false)
      },2000)
    })
  },[])

  useEffect(()=>{
    setIndex(0)
  },[song])

  //计算当前歌词的索引
  useEffect(()=>{
    if(!sentences){
      return
    }
    for(let i=0;i<sentences.length;i++){
      if( i <sentences.length -1 ){
        const thisSentence = sentences[i]
        const nextSentence = sentences[i+1]
        if(currentTime>=getSeconds(thisSentence.timestamp) && currentTime<=getSeconds(nextSentence.timestamp)){
          setIndex(i)
          break
        }
      }else{
        setIndex(i)
          break
      }
    }
  },[currentTime,sentences])

  const getClasse = useCallback((idx:number)=>{
    return classnames('cloud-music-player-lyric',{
      'cloud-music-player-lyric-current':idx === index
    })
  },[index])

  //自动滚动歌词,这里要注意判断用户是否在手动滚动歌词 scrolling,如果在滚动,则自动滚动要跳过
  useEffect(()=>{
    const ele = document.getElementsByClassName('cloud-music-player-lyric-current')[0]
    if(ele && !scrolling){
      ele.scrollIntoView({behavior:'smooth',block:'center'}) //平滑滚动至视口中央
    }
  },[index])
  return (
    <div className="cloud-music-player-lyric-container" ref={ref}>
      {
        sentences
        ?
        sentences.map((sentence,idx)=>{
          return <div key={idx} className={getClasse(idx)}>
            <span>{sentence.content}</span>
          </div>
        })
        :
        <div>暂无歌词</div>

      }
    </div>
  )
}
export default Lyric