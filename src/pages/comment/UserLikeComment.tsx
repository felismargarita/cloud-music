import React, { useEffect, useState } from 'react'
import {history} from 'umi'
import useApi from '@/hooks/useApi'
import {IPaginationRes} from '@/types/CommonTypes'
import {ICommentType} from '@/types/CommentType'
import Comment from '@/components/comment/Comment'
import InfiniteScroll from '@/components/infiniteScroll/InfiniteScroll'
import moment from 'moment'
import urls from '@/api/urls'
import Loading from '@/components/loading/Loading'
import Divider from '@/components/divider/Divider'
import CommentModal from '@/components/dialog/CommentModal'
import PageHeader from '@/components/header/PageHeader'
interface UserLikeCommentProps {
  location:{query:{songId:string}}
}

const UserLikeComment:React.FC<UserLikeCommentProps> = (props)=>{
  const songId = props.location.query.songId
  const [pagination,setPagination] = useState({current:1,size:10})
  const [comments,setComments] = useState<ICommentType[]>([])
  const likeCommentsApi = useApi<IPaginationRes<ICommentType>>({url:'/comment/paging', method:'post'},{immediate:false})
  const [modalVisible,setModalVisible] = useState(false)
  const [currentComment,setCurrentComment] = useState<ICommentType>()
  useEffect(()=>{
    likeCommentsApi.fetch({data:{
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
    }}).then(cmts=>{
      setComments([...comments,...cmts.records])
    })
  },[pagination,songId])

  const nextPage = ()=>{
    setPagination({current:pagination.current+1,size:pagination.size})
  }


  if(!songId){
    history.push('/')
  }

  const loading = likeCommentsApi.loading
  const totalPage = likeCommentsApi.data?.pages || 0
  const hasMore = pagination.current<totalPage
  return (
    <div>
      <CommentModal 
        visible={modalVisible} 
        currentComment={currentComment}
        onCancel={()=>{
          setCurrentComment(undefined)
          setModalVisible(false)
        }}
        onOk={()=>{
          setCurrentComment(undefined)
          setModalVisible(false)
        }}/>
      <InfiniteScroll 
      loadMore={nextPage} 
      hasMore={hasMore}>
        <PageHeader content="精彩评论" pure/>
      {
        comments.map(comment=>{
          const {id,content,createdNickname,avatar,userLike,createdTime,referComment} = comment
          return (
            <div key={id}>
              <Comment
                onClickComment={()=>{
                  setCurrentComment(comment)
                  setModalVisible(true)
                }}
                content={content}
                nickname={createdNickname}
                avatar={{src:urls.SERVER+avatar,size:36}}
                postTime={moment(createdTime)}
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
                <Divider direction="horizontal"/>
            </div>
          )
        })
      }
      {
        loading
        ?
        <div className="cloud-music-userlike-bottom-text">
          <Loading/>
        </div>
        :
        (
          hasMore ? null : <div className="cloud-music-userlike-bottom-text">没有更多了</div>
        )
      }
    </InfiniteScroll>
    </div>

  )
}

export default UserLikeComment