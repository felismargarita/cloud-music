import React from 'react'
import useSong from '@/hooks/useSong'
import {SongState} from '@/models/song'
import {useSelector} from 'umi'
import classnames from 'classnames'
interface BoardHeaderProps {
  visible?:boolean
}

const BoardHeader:React.FC<BoardHeaderProps> =({visible}) => {
  const {song} = useSong()
  const songModel = useSelector((state:{song:SongState})=>state.song)
  const classes = classnames('cloud-music-board-header',{
    'cloud-music-board-header-display':visible
  })
  const nameClasses = classnames('cloud-music-board-header-name',{
    'cloud-music-board-header-name-hidden':!visible
  })
  const lyricClasses = classnames('cloud-music-board-header-lyric',{
    'cloud-music-board-header-lyric-hidden':!visible
  })
  return (
    <div className={classes} style={{background:visible ? '#fff' : ''}}>
      <div className={nameClasses}>{song?.name}</div>
      <div className={lyricClasses}>{songModel.currentLyric}</div>
    </div>
  )
}

export default BoardHeader