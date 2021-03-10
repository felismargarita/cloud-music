import React,{useEffect, useState} from 'react'
import Icon from '@/components/icons/Icon'
import PlayListCard from './PlayListCard'

interface PlayListProps {
}

const PlayList:React.FC<PlayListProps> = ()=>{
  const [visible,setVisible] = useState(false)

  return (
    <div className="cloud-music-player-list">
      {
        visible 
        ?
        <PlayListCard onClose={()=>setVisible(false)}/>
        :
        null
      }
      <Icon  className="cloud-music-player-icon" type="playList" style={{fontSize:'20px'}} onClick={()=>setVisible(!visible)}/>
    </div>
  )
}

export default PlayList

