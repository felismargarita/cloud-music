import React,{useState,useEffect, useRef} from 'react'
import SwitchBotton from '@/components/switchBotton/SwitchBotton'
import Icon from '@/components/icons/Icon'
import {SongListState} from '@/models/songList'
import {useSelector} from 'umi'
import Divider from '@/components/divider/Divider'
import List from '@/components/list/List'
import moment from 'moment'
import classnames from 'classnames'
import useSong from '@/hooks/useSong'
import {useClickAway} from 'ahooks'
//组件说明:
//这个组件的布局有点反常,他是游离在组件之外,而是去参考某一个父组件的,
//这个父组件的className是 cloud-music-footer,需要获取到dom
//获取到dom结构后我们采用fixed布局方式解决

interface PlayListCardProps {
  onClose?:()=>void
}

const PlayListCard:React.FC<PlayListCardProps> = ({onClose})=>{
  const [style,setStyle] = useState<React.CSSProperties>({})
  const {list,index:currentIndex} = useSelector((state:{songList:SongListState})=>state.songList)
  const {change} = useSong()
  const [hoverIndex,setHoverIndex] = useState<number>()
  const height = 538
  const width = 420
  const headerHeight = 104
  useEffect(()=>{
    const footerDomList = document.getElementsByClassName('cloud-music-footer')
    const footerDom = footerDomList[0]
    const position = footerDom.getBoundingClientRect()

    setStyle({
      position:'fixed',
      width,
      height,
      top:position.bottom - height - position.height, //补偿高度,
      left:position.right - width  //补偿宽度
    }) 
  },[])

  const playListRef = useRef<HTMLDivElement>(null)
  
  //在卡片外点击可以关闭卡片本身
  useClickAway(()=>{
    onClose?.()
  },playListRef)

  const hoverStyle =(index:number) => {
    const st = index === hoverIndex ? {color:'#000'}:{}
    if(index === currentIndex){
      st.color = '#EC4141'
    }
    return st
  }
  const getClasses = (index:number)=>{
    return classnames('cloud-muisc-player-list-item',{
      'cloud-muisc-player-list-item-selected':index === currentIndex
    })
  }
  return (<div className="cloud-music-player-list-card" style={style} ref={playListRef}>
    <div className="cloud-music-player-list-header" style={{height:headerHeight}}>
      <SwitchBotton className="cloud-music-player-list-switcher">
        <SwitchBotton.Item index={0}>播放列表</SwitchBotton.Item>
        <SwitchBotton.Item index={1}>历史记录</SwitchBotton.Item>
      </SwitchBotton>
      <div className="cloud-music-player-list-statistic">总共{list.length}首</div>
      <div className="cloud-music-player-list-btn">
        <span>
          <Icon type="collection" size={18} className="cloud-music-player-list-icon"/>收藏全部
        </span>
        <Divider voidValue={24}/>
        <span>
        <Icon type="delete" size={18} className="cloud-music-player-list-icon"/>清空
        </span>
      </div>
    </div>
    <List className="cloud-muisc-player-list-content" style={{height:height-headerHeight}}>
      {
        list.map((song,index)=><List.Item key={song.id}>
          <div 
            onDoubleClick={()=>change(index)}
            className={getClasses(index)}
            onMouseEnter={()=>setHoverIndex(index)} 
            onMouseLeave={()=>setHoverIndex(undefined)}>
            {
              index === currentIndex
              ?
              <Icon className="cloud-muisc-player-list-item-status" type="start" size={6}/>
              :
              <div className="cloud-muisc-player-list-item-status"></div>
            }
            <div className="cloud-muisc-player-list-item-song" style={hoverStyle(index)}>{song.name}</div>
            <div className="cloud-muisc-player-list-item-singer" style={hoverStyle(index)}>{song.singer}</div>
            <Icon className="cloud-muisc-player-list-item-icon" style={hoverStyle(index)} type="source" size={14}/>
            <div className="cloud-muisc-player-list-item-duration" style={hoverStyle(index)}>{moment(song.duration*1000).format('mm:ss')}</div>
          </div>
        </List.Item>)
      }
    </List>

  </div>)
}

export default PlayListCard