import React,{useEffect, useState} from 'react'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import GramoPhone from './gramo/GramoPhone'
import Lyric from './lyric/Lyric'
import Comments from './comments/Comments'
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
  const innerStyle:React.CSSProperties = ({
    position:'fixed',
    overflowY:'auto',
    width,
    height:visible ? height : 0,
    left:position.right - width,
    bottom: window.innerHeight - position.top
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
        <div style={{width:'100px'}}></div>
        <Lyric/>
      </div>
      <div className="cloud-music-like-comments">
        <Comments orderAttr="like" songId={song?.id}/>
      </div>
      <div className="cloud-music-new-comments">
        <Comments orderAttr="createdTime" songId={song?.id}/>
      </div>
    </div>
  )
}


export default Board