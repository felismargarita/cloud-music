import React,{useState} from 'react'
import Dialog from '@/components/dialog/Dialog'
import useSong from '@/hooks/useSong'
import Draggable  from 'react-draggable'
import InputArea from '@/components/inputArea/InputArea'
import Button from '@/components/button/Button'
import classnames from 'classnames'
import useApi from '@/hooks/useApi'
import toast from '@/components/toast/Toast'
import {ICommentType} from '@/types/CommentType'

interface CommentModalProps {
  visible:boolean
  onCancel:()=>void
  onOk:()=>void
  currentComment?:ICommentType
}

const CommentModal:React.FC<CommentModalProps> = ({visible,onCancel,onOk,currentComment})=>{
  const {song} = useSong()
  const [dragableDiabled,setDragbleDiabled] = useState(true)
  const [comment,setComment] = useState('')
  const addCommentApi = useApi({url:'/comment',method:'POST'})
  const title = (
    <div
     className="cloud-muisc-comment-modal-title"
     onMouseOver={() => {
      if (dragableDiabled){
        setDragbleDiabled(false)
      }
      }}
    onMouseOut={() => {
      setDragbleDiabled(true)
    }}
     >
      {
        currentComment
        ?
        '评论'
        :
        '歌曲: '+song?.name
      }
    </div>
  )

  const restCount = 140 - (comment ? comment.length : 0)

  const disableBtn = restCount === 140
  const btnClasses = classnames('cloud-music-comment-btn',{
    'cloud-music-comment-btn-disabled':disableBtn
  })



  const placeholder = (
    currentComment
    ?
    `回复 ${currentComment.createdNickname}:`
    :
    '发表评论'
  )
  return (
    <Dialog
      className="cloud-music-comment-dialog"
      onCancel={()=>{
        onCancel()
        setComment('')
      }}
      bodyStyle={{paddingTop:0,paddingLeft:'16px',paddingRight:'16px'}}
      modalRender={modal => <Draggable disabled={dragableDiabled}>{modal}</Draggable>}
      visible={visible} 
      title={title}>
      <InputArea placeholder={placeholder} value={comment} onChange={e=>setComment(e.currentTarget.value)}/>
      <div className="cloud-music-right-bar">
        <div className="cloud-music-comment-count">{restCount}</div>
        <Button 
        loading={addCommentApi.loading}
        type="round" 
        className={btnClasses} 
        onClick={()=>{
          if(disableBtn){
            return
          }
          if(restCount<0){
            console.log(123)
            toast.error({content:'字数超过限制'})
            return
          }
          addCommentApi.fetch({
            data:{
              content:comment,
              songId:song?.id,
              referId:currentComment?.id
            }
          }).then(()=>{
            setComment('')
            onOk()
          })
        }}>评论</Button>
      </div>
    </Dialog>
  )
}

export default CommentModal