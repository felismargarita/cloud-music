import React,{useState} from 'react'
import {ISong} from '@/types/SongType' 
import Card from '@/components/card/Card'
import urls from '@/api/urls'
import Board from './board/Board'
import Icon from '@/components/icons/Icon'
interface SongInfoProps {
  song?:ISong
}

const SongInfo:React.FC<SongInfoProps> = ({song})=>{
  const [visible,setVisible] = useState(false)
  if(!song){
    return null
  }

  const center = (
    <div className="cloud-music-player-song-icon">
    </div>
  )

  return (
    <div className="cloud-music-player-song-container">
      <Board visible={visible}/>
      <Card center={center} className="cloud-music-player-song-info" onClick={()=>setVisible(!visible)}>
        {
          song.pictureUrl 
          ?
          <img src={urls.SERVER+song.pictureUrl}/>
          :
          <div>
            <div style={{background:'lightblue',height:'48px',width:'48px'}}></div>
          </div>
        }
      </Card>
      <div className="cloud-music-player-song-text">
        <div className="cloud-music-player-song-name" onClick={()=>setVisible(!visible)}>{song.name}</div>
        <div className="cloud-music-player-song-singer">{song.singer || '佚名'}</div>
      </div>
    </div>

  )
}

export default SongInfo