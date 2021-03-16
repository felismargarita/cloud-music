import React, { useEffect, useState } from 'react'
import useApi from '@/hooks/useApi'
import {IPaginationRes} from '@/types/CommonTypes'
import {ICommentType} from '@/types/CommentType'
import Comment from '@/components/comment/Comment'
import moment from 'moment'
import Pagination from '@/components/pagination/Pagination'
import classnames from 'classnames'
import Divider from '@/components/divider/Divider'
import Loading from '@/components/loading/Loading'
import Button from '@/components/button/Button'
import urls from '@/api/urls'
interface CommentsProps {
  orderAttr:'like'|'createdTime'
  className?:string
  songId?:number
}

const Comments:React.FC<CommentsProps> = ({orderAttr,className,songId})=>{
  const [pagination,setPagination] = useState({current:1,size:10})
  const commentsApi = useApi<IPaginationRes<ICommentType>>(
    {url:'/comment/paging', method:'post'},{immediate:false},
    )
  useEffect(()=>{
    if(songId){
      commentsApi.fetch({
        data:{
          ...pagination,
          orders:[
            {
              column:'userLike',
              asc:false
            }
          ],
          params:{
            songId
          }
        }})
    }
  },[pagination,songId])
  const title = (
    orderAttr === 'createdTime'
    ?
    `最新评论 ${commentsApi.data?.total || ''}`
    :
    '精彩评论'
  )

  const body = (
    <>
      {
        commentsApi.data?.records.map((comment,index)=>{
          const {content,createdTime,createdNickname,userLike,id,referComment,avatar} = comment
          const isLast = pagination.size -1 === index
          return (
            <>
              <Comment 
                key={id}
                avatar={{src:urls.SERVER+avatar,size:36}}
                content={content}
                postTime={moment(createdTime)}
                nickname={createdNickname}
                like={userLike}
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
              />
              {
                isLast
                ?
                null
                :
                <Divider direction="horizontal"/>
              }
            </>
          )
        }) 
        }
    </>
  )

  const footer = (
    orderAttr === 'like'
    ?
    <div className="cloud-music-player-more-btn">
      <Button type="round">更多精彩评论</Button>
    </div>
    :
    <Pagination
    total={commentsApi.data?.total || 0}
    current={pagination.current}
    pageSize={pagination.size}
    onChange={(p,s)=>setPagination({current:p,size:pagination.size})}
    />
  )

  const renderBody = ()=>{
    if(commentsApi.loading){
      return <div style={{textAlign:'center'}}><Loading/></div>
    }
    if(commentsApi.data?.records.length === 0){
      return '暂无评论'
    }
    return <div className="cloud-music-comments-content">{body}</div>
  }

  const classes = classnames('cloud-music-comments',className)
  return (
    <div className={classes}>
      <div className="cloud-music-comments-title">{title}</div>
      {renderBody()}
    <div className="cloud-music-comments-footer">{footer}</div>
    </div>
  )
}

export default Comments