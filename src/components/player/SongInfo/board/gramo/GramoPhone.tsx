import React, { useState } from 'react'
import blackTap from '@/assets/imgs/blackTap.png'
import musicPole from '@/assets/imgs/musicPole.png'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import urls from '@/api/urls'
import useAudio from '@/hooks/useAudio'
interface GramoPhotoProps {}
const GramoPhone:React.FC<GramoPhotoProps> = ()=>{
  const {paused} = useAudio()
  const {song} = useSong()

  const poleClasses = classnames('cloud-music-player-gramo-pole',{
    'cloud-music-player-gramo-pole-off':paused
  })

  const tapClasses = classnames('cloud-music-player-gramo-tap-container',{
    'cloud-music-player-gramo-paused':paused
  })

  return (
    <div className="cloud-music-gramo-phone">
      <div className={tapClasses}>
        <img className="cloud-music-player-gramo-tap" src={blackTap}/>
        <img className="cloud-music-player-gramo-pic" src={urls.SERVER+song?.pictureUrl}/>      
      </div>
      <img className={poleClasses} src={musicPole}/>
    </div>
  )

}

export default GramoPhone