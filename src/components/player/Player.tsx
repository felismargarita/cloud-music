import React, { useEffect } from 'react'
import Bar from './bar/Bar'
import StartButton from '@/components/button/StartButton'
import Icon from '@/components/icons/Icon'
interface PlayerProps {
}

const Player:React.FC<PlayerProps> = ()=>{
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const player = ()=>{
    if(audioRef.current){
      return Promise.resolve(audioRef.current)
    }else{
      return Promise.reject()
    }
  }
  return (
    <div style={{width:'100%',height:'100%'}}>
      <audio className="cloud-music-player-hidden-audio" ref={audioRef} src="http://localhost:9001/song/yanyuan.mp3"/>
      <div className="cloud-music-container">
        <div className="cloud-music-player-btn-group">
          <Icon type="previous" size={24}/>
          <StartButton
          className="cloud-music-player-main-btn"
          iconStyle={{color:'#000'}}
          onClick={()=>{
            player().then(p=>p.play())
          }}/>
          <Icon type="next"/>
        </div>
        <Bar current={0} total={261} onChange={(offset)=>{
          player().then(audio=>audio.currentTime = offset)
        }}/>
      </div>
    </div>
  )
}

export default Player