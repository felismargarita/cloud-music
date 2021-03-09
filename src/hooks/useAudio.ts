import {useState,useEffect,useCallback} from 'react'
import {ModeType} from '@/components/player/mode/Mode'
import useSong from '@/hooks/useSong'
export default (audio:HTMLAudioElement|null,playMode:ModeType)=>{
  const [currentTime,setCurrent] = useState(0)
  const {next,random} = useSong()
  const isPaused = audio ? audio.paused : true
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

  //切换播放状态 暂停-播放
  const toggle = useCallback(()=>{
    if(isPaused){
      play()
    }else{
      pause()
    }
  },[isPaused,play,pause])

    //处理按空格键切换暂停和播放按钮
    useEffect(()=>{
      window.onkeypress = (k:KeyboardEvent)=>{
          if(k.code === 'Space'){
            toggle()
          }
      }
      return ()=>window.addEventListener('keypress',()=>false)
    },[toggle])
  

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
          paused:isPaused,
          pause,
          play,
          changeCurrentTime
        }
}