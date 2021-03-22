import React,{useCallback, useEffect, useState} from 'react'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import GramoPhone from './gramo/GramoPhone'
import Lyric from './lyric/Lyric'
import useScroll from '@/hooks/useScroll'
import BackTop from '@/components/backTop/BackTop'
import WriteCommentBtn from './bottom/WriteCommentBtn'
import DeliveryCommentBtn from './bottom/DeliveryCommentBtn'
import CommentModal from './CommentModal'
import Comment from '@/components/comment/Comment'
import Divider from '@/components/divider/Divider'
import moment from 'moment'
import {IPaginationRes} from '@/types/CommonTypes'
import {ICommentType} from '@/types/CommentType'
import useApi, { IUseAPI } from '@/hooks/useApi'
import urls from '@/api/urls'
import Button from '@/components/button/Button'
import Pagination from '@/components/pagination/Pagination'
import Loading from '@/components/loading/Loading'

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
  const [currentComment,setComment] = useState<ICommentType>()
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

  //精彩评论API
  const likeCommentsApi = useApi<IPaginationRes<ICommentType>>({url:'/comment/paging', method:'post'},{immediate:false})
  const fetch = ()=>{
    likeCommentsApi.fetch({
      data:{
        current:1, 
        size:10,
        orders:[
          {
            column:'userLike',
            asc:false
          }
        ],
        params:{
          songId:song?.id
        }
      }})
  }
  useEffect(()=>{
    if(song?.id){
      fetch()
    }
  },[song])

  //最新评论API
  const newCommentsApi = useApi<IPaginationRes<ICommentType>>({url:'/comment/paging', method:'post'},{immediate:false})
  const [pagination,setPagination] = useState({current:1,size:10}) 
  useEffect(()=>{
    if(song?.id){
      newCommentsApi.fetch({
        data:{
          ...pagination,
          orders:[
            {
              column:'createdTime',
              asc:false
            }
          ],
          params:{
            songId:song?.id
          }
        }})
    }
  },[song,pagination])


  const renderCommentsBody = (commentApi:IUseAPI<IPaginationRes<ICommentType>>)=>{
    if(commentApi.loading){
      return <div style={{textAlign:'center'}}><Loading/></div>
    }
    if(commentApi.data?.records.length === 0){
      return '暂无评论'
    }
    return <div className="cloud-music-comments-content">
           {
              commentApi.data?.records.map((comment,index)=>{
                const {content,createdTime,createdNickname,userLike,id,referComment,avatar} = comment
                const isLast =  9 === index
                return (
                  <>
                    <Comment 
                      key={id}
                      avatar={{src:urls.SERVER+avatar,size:36}}
                      content={content}
                      postTime={moment(createdTime)}
                      nickname={createdNickname}
                      like={userLike}
                      onClickComment={()=>{
                        setDialogVisible(true)
                        setComment(comment)
                      }}
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
    </div>
  }


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
          <div className="cloud-music-comments">
            <div className="cloud-music-comments-title">精彩评论</div>
            <div className="cloud-music-comments-content">
            {renderCommentsBody(likeCommentsApi)}
            </div>
            <div className="cloud-music-comments-footer">
              <div className="cloud-music-player-more-btn">
                <Button type="round">更多精彩评论</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="cloud-music-new-comments">
        <div className="cloud-music-comments">
          <div className="cloud-music-comments-title">{`最新评论 ${newCommentsApi.data?.total || ''}`}</div>
          {renderCommentsBody(newCommentsApi)}
          <div className="cloud-music-comments-footer">
          <Pagination
            className="cloud-music-player-comments-pagination"
            total={newCommentsApi.data?.total || 0}
            current={pagination.current}
            pageSize={pagination.size}
            onChange={(p,s)=>setPagination({current:p,size:pagination.size})}
            />
          </div>
        </div>
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
      <CommentModal 
        currentComment={currentComment}
        onOk={()=>{
          setDialogVisible(false)
          setComment(undefined)
          setPagination({...pagination,current:1})
          fetch()
        }} 
        visible={dialogVisible} 
        onCancel={()=>{
          setComment(undefined)
          setDialogVisible(false)
        }}/>
    </div>
  )
}


export default Board