import React,{useCallback, useEffect, useState} from 'react'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import GramoPhone from './gramo/GramoPhone'
import Lyric from './lyric/Lyric'
import Comments from './comments/Comments'
import useScroll from '@/hooks/useScroll'
import BackTop from '@/components/backTop/BackTop'
import WriteCommentBtn from './bottom/WriteCommentBtn'
import DeliveryCommentBtn from './bottom/DeliveryCommentBtn'
import Dialog from '@/components/dialog/Dialog'
import CommentModal from './comments/CommentModal'
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
  const [scrollVisible,setSrcollVisible] = useState(false)
  const [dialogVisible,setDialogVisible] = useState(false)
  const height = 598
  const width = 1021
  const innerStyle:React.CSSProperties = ({
    position:'fixed',
    width,
    height:visible ? height : 0,
    left:position.right - width,
    bottom: window.innerHeight - position.top
  }) 
  const {song} = useSong()

  const target = useCallback(()=>{
    const elements = document.getElementsByClassName('cloud-music-player-board-wrapper')
    return elements[0] as HTMLElement
  },[])

  //监听滚动事件
  useScroll((v)=>{
    setSrcollVisible(v)
  },target,100)
  return (
    <div className={classes} style={{...style,...innerStyle}} {...rest}>
      <div className="cloud-music-player-board-wrapper" style={{paddingBottom : visible ? 68 : 0}}>
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
          <Comments orderAttr="userLike" songId={song?.id}/>
        </div>
        <div className="cloud-music-new-comments">
          <Comments orderAttr="createdTime" songId={song?.id}/>
        </div>
      </div>
      {
        visible
        ?
        <div className="cloud-music-player-board-bottom">
          <div className="cloud-music-player-board-backtop">
            <BackTop target={target} visible={scrollVisible}/>
          </div>
          <div className="cloud-music-player-board-write-btn" style={{pointerEvents:!scrollVisible?'all':'none'}}>
            <WriteCommentBtn visible={scrollVisible} onClick={()=>setDialogVisible(true)}/>
          </div>
          <div className="cloud-music-player-board-delivery-btn">
            <DeliveryCommentBtn visible={scrollVisible} onClick={()=>setDialogVisible(true)}/>
          </div>
        </div>
        :
        null
      }
      <CommentModal onOk={()=>false} visible={dialogVisible} onCancel={()=>setDialogVisible(false)}/>
    </div>
  )
}


export default Board