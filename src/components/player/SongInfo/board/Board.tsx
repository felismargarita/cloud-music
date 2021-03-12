import React,{useEffect, useState} from 'react'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import GramoPhone from './gramo/GramoPhone'
import Lyric from './lyric/Lyric'
interface BoardProps {
  visible?:boolean
  className?:string
  style?:React.CSSProperties
}

const Board:React.FC<BoardProps> = ({visible,className,style,...rest})=>{
  const classes = classnames('cloud-music-player-board',className)
  const footerDomList = document.getElementsByClassName('cloud-music-footer')
  const footerDom = footerDomList[0]
  const position = footerDom.getBoundingClientRect()
  const height = 598
  const width = 1021
  const visibleTop = position.bottom - height - position.height
  const innerStyle:React.CSSProperties = ({
    position:'fixed',
    width,
    height,
    top:visibleTop,
    left:position.right - width,
    transform:visible ? 'scale(1,1)' : 'scale(1,0)',
    transformOrigin:'0 100%'
  }) 
  const {song} = useSong()
  return (
    <div className={classes} style={{...style,...innerStyle}} {...rest}>
      <div className="cloud-music-player-board-title">
        <div className="cloud-music-player-board-name">{song?.name}</div>
        <div className="cloud-music-player-board-singer">{song?.singer}-{song?.album}</div>
      </div>
      <div className="cloud-music-player-border-detail">
        <GramoPhone/>
        <Lyric/>
      </div>
    </div>
  )
}


export default Board