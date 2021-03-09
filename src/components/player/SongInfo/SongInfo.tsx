import React from 'react'
import {ISong} from '@/types/SongType' 
import Card from '@/components/card/Card'
import urls from '@/api/urls'
interface SongInfoProps {
  song?:ISong
}

const SongInfo:React.FC<SongInfoProps> = ({song})=>{

  if(!song){
    return null
  }

  return (
    <div className="cloud-music-player-song-container">
      <Card className="cloud-music-player-song-info">
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
        <div>{song.name}</div>
        <div className="cloud-music-player-song-singer">{song.singer || '佚名'}</div>
      </div>
    </div>

  )
}

export default SongInfo