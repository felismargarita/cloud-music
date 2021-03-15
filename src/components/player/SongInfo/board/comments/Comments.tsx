import React, { useState } from 'react'
import useApi from '@/hooks/useApi'
import {IPaginationRes} from '@/types/CommonTypes'
import {ICommentType} from '@/types/CommentType'
import Comment from '@/components/comment/Comment'
import moment from 'moment'
import Pagination from '@/components/pagination/Pagination'
import classnames from 'classnames'
interface CommentsProps {
  orderAttr:'like'|'createdTime'
  className?:string
}

const Comments:React.FC<CommentsProps> = ({orderAttr,className})=>{
  const [pagination,setPagination] = useState({current:1,size:10})
  const commentsApi = useApi<IPaginationRes<ICommentType>>({url:'/comment/paging',method:'post',data:pagination},{immediate:true})
  const title = (
    orderAttr === 'createdTime'
    ?
    `最新评论${commentsApi.data?.total}`
    :
    '精彩评论'
  )

  const body = (
    <>
      {
        commentsApi.data?.records.map(comment=>{
          const {content,createdTime,createdNickname,like,id,referComment} = comment
          return (
          <Comment 
            key={id}
            content={content}
            postTime={moment(createdTime)}
            nickname={createdNickname}
            like={like}
            referComment={
              referComment 
              ?
              {
              content:referComment.content,
              nickname:referComment.createdNickname
              }
              :
              undefined
            }
          />)
        }) 
        }
    </>
  )

  const footer = (
    orderAttr === 'like'
    ?
    '更多精彩评论'
    :
    <Pagination
    total={commentsApi.data?.total || 0}
    current={pagination.current}
    pageSize={pagination.size}
    onChange={(p,s)=>setPagination({current:p,size:pagination.size})}
    />
  )

  const classes = classnames('cloud-music-comments',className)
  return (
    <div className={classes}>
      <div className="cloud-music-comments-title">{title}</div>
      {
        commentsApi.data?.records.length
        ?
        <>
        <div className="cloud-music-comments-content">{body}</div>
        <div className="cloud-music-comments-footer">{footer}</div>
        </>
        :
        <span>暂无评论</span>
      }

    </div>
  )
}

export default Comments