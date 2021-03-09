import {useState,useEffect,useCallback} from 'react'
import {ModeType} from '@/components/player/mode/Mode'
import useSong from '@/hooks/useSong'
export default (audio:HTMLAudioElement|null,playMode:ModeType)=>{
  const [currentTime,setCurrent] = useState(0)
  const {next,random} = useSong()
  //定时获取当前的时间
  useEffect(()=>{
    const inter = setInterval(()=>{
      setCurrent(audio?.currentTime || 0)
    },200)
    return ()=>clearInterval(inter)
  },[audio])

  //处理播放模式
  useEffect(()=>{
    if(!audio){
      return
    }
    if(playMode === 'oneRound'){
      audio.loop = true
    }else{
      audio.loop = false
    }
    if(playMode === 'turnList'){
      audio.autoplay = false
    }else{
      audio.autoplay = true
    }
  },[audio,playMode])
  
  const pause =useCallback(()=>{
    if(!audio){
      return
    }
    audio.pause()
  },[audio])

  const play = useCallback(()=>{
    if(!audio){
      return
    }
    audio.play()
  },[audio])

  const changeCurrentTime = useCallback((currentTime:number) =>{
    if(!audio){
      return
    }
    audio.currentTime = currentTime
  },[audio])

  useEffect(()=>{
    if(!audio){
      return
    }
    audio.onended = ()=>{
      if(playMode === 'allRound'){
        next()
      }
      if(playMode === 'random'){
        random()
      }
    }


  },[playMode])

  return {
          currentTime,
          paused:audio ? audio.paused : true,
          pause,
          play,
          changeCurrentTime
        }
}