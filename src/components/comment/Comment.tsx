import React from 'react'
import {AvatarProps} from '@/components/avatar/Avatar'
import Avatar from '@/components/avatar/Avatar'
import {Moment} from 'moment'
import Divider from '@/components/divider/Divider'
import Icon from '@/components/icons/Icon'
import formatMoment from './formatMoment'
interface CommentProps {
  content:string
  nickname:string
  avatar?:AvatarProps
  postTime?:Moment
  referComment?:CommentProps
  like?:number
  footer?:React.ReactNode[]
  onClickComment?:()=>void
  onClickLike?:()=>void
}

const Comment:React.FC<CommentProps> = ({avatar,content,nickname,postTime,referComment,footer,like,onClickComment,onClickLike})=>{

  return (
    <div className="cloud-music-comment">
      {
        avatar
        ?
        <Avatar className="cloud-music-comment-avatar" {...avatar}/>
        :
        null
      }
      <div className="cloud-music-comment-detail">
        <div className="cloud-music-comment-content">
          <span className="cloud-music-comment-nickname">
            {nickname}:
          </span>
          {content}
        </div>
        {
          referComment
          ?
          <div className="cloud-music-comment-refer">
            <div className="cloud-music-comment-content">
              <span className="cloud-music-comment-nickname">
                @{referComment.nickname}:
              </span>
              {referComment.content}
            </div>
          </div>
          :
          null
        }
        <div className="cloud-music-comment-footer">
          <div className="cloud-music-comment-time">
            {
            postTime ? formatMoment(postTime) : null
            }
          </div>
          <div className="cloud-music-comment-btn">
            {
              footer
              ?
              footer.reduce<React.ReactNode[]>((pre,curr,index)=>{
                if(index <footer.length - 1){
                  return [...pre,<Divider/>,curr]
                }else{
                  return [...pre,curr]
                }
              },[]).map(el=>el)
              :
              <div>
                <span className="cloud-music-comment-btn-item">
                  <Icon type="like" size={13} onClick={onClickLike}/>
                  <span style={{marginLeft:'4px'}}>{like ? like : ''}</span>
                </span>
                <Divider voidValue={13}/>
                <span className="cloud-music-comment-btn-item">
                  <Icon type="share" size={13}/>
                </span>
                <Divider voidValue={13}/>
                <span className="cloud-music-comment-btn-item">
                  <Icon type="comment" size={13} onClick={onClickComment}/>
                </span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment