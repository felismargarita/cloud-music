import React, { useEffect, useRef, useState } from 'react'
import Bar from './bar/Bar'
import Icon from '@/components/icons/Icon'
import Mode,{ModeType} from './mode/Mode'
interface PlayerProps {
  url:string
  total:number
}

const Player:React.FC<PlayerProps> = ({url,total})=>{
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const [timer,setTimer] = useState(0)
  const [status,setStatus] = useState<'pause'|'start'>('pause')
  const intervalRef = useRef<any>()
  const [playMode,setPlayMode] = useState<ModeType>('turnList')
  const player = ()=>{
    if(audioRef.current){
      return Promise.resolve(audioRef.current)
    }else{
      return Promise.reject()
    }
  }

  const stop = ()=>{
    player().then(audio=>{
      audio.pause()
      setStatus('pause')
      clearInterval(intervalRef.current)
      intervalRef.current = null
    })
  }

  const start =()=>{
    player().then(audio=>{
      audio.play()
      setStatus('start')
      const inter = setInterval(()=>{
        setTimer(timer=>timer+1)
      },1000)
      intervalRef.current = inter
    })
  }

  //处理播放完毕后的逻辑
  useEffect(()=>{
    if(timer === 261){
      player().then(audio=>{
        stop() //先暂停,1秒后再重复播放
        setTimeout(()=>{
          setTimer(0)
          start()
        },1000)
      })
    }
  },[timer])

  const mainBtn = 
                status === 'pause'
                ?
                <Icon
                className="cloud-music-player-main-btn"
                type="cloud"
                onClick={start}/>
                :
                <Icon type="pause" onClick={stop}/>

  return (
    <div style={{width:'100%',height:'100%'}}>
      <audio className="cloud-music-player-hidden-audio" ref={audioRef} src="http://localhost:9001/song/yanyuan.mp3"/>
      <div className="cloud-music-container">
        <div className="cloud-music-player-btn-group">
          <Mode mode={playMode} onChange={m=>setPlayMode(m)}/>
          <Icon type="previous" size={18}/>
          {mainBtn}
          <Icon type="next" size={18}/>
          <Icon type="next" size={18}/>
        </div>
        <Bar current={timer} total={261} onChange={(offset)=>{
            player().then(audio=>{
              setTimer(offset)
              audio.currentTime = offset
            })
          }}/>
      </div>
    </div>
  )
}

export default Player