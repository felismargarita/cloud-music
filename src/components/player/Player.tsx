import React, { useState } from 'react'
import Bar from './bar/Bar'
import Icon from '@/components/icons/Icon'
import Mode,{ModeType} from './mode/Mode'
import SongInfo from './SongInfo/SongInfo'
import urls from '@/api/urls'
import useAudio from '@/hooks/useAudio'
import useAudioDom from '@/hooks/useAudioDom'
import useSong from '@/hooks/useSong'
const Player:React.FC<any> = ()=>{
  const [playMode,setPlayMode] = useState<ModeType>('turnList')
  const {audioDom,audioRef} = useAudioDom()
  const {currentTime,play,paused,pause,changeCurrentTime} = useAudio(audioDom,playMode)
  const {song,next,previous,random} = useSong()
  const totalSesonds = song?.duration || 0

  const mainBtn = (
    <div className="cloud-music-player-main-btn" onClick={()=>{
      if(paused){
        play()
      }else{
        pause()
      }
    }}>
      {
        paused
        ?
        <Icon style={{marginRight:'-2px',marginTop:'-2px'}} type="start"/>
        :
        <Icon type="pause" style={{marginRight:'1px',marginTop:'-2px'}}/>
      }
    </div>
  )


  return (
    <div style={{width:'100%',height:'100%'}}>
      {
        song 
        ?
        <audio className="cloud-music-player-hidden-audio" ref={audioRef} src={urls.SERVER+song.songUrl}/>
        :
        null
      }
      <div className="cloud-music-container">
        <SongInfo song={song}/>
        <div className="cloud-music-player-btn-group">
          <Mode mode={playMode} onChange={setPlayMode}/>
          <div className="cloud-music-player-btn">
            <Icon type="previous" size={18} onClick={previous}/>
          </div>
          {mainBtn}
          <div className="cloud-music-player-btn">
            <Icon type="next" size={18} onClick={()=>{
              if(playMode === 'random'){
                random()
              }else{
                next()
              }
            }}/>
          </div>
          <div className="cloud-music-player-btn">
            <div style={{fontSize:'12px',marginTop:'2px',fontWeight:600}}>词</div>
          </div>
        </div>
        <Bar current={currentTime} total={totalSesonds} onChange={changeCurrentTime}/>
      </div>
    </div>
  )
}

export default Player