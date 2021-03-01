import React from 'react'
import Menu from '@/components/menu/Menu'
import Icon from '@/components/icons/Icon'
import {IconType} from '@/components/icons/Icon'
const MenuItem = (icon:IconType,text:string)=>{
  return <div className="cloud-music-asider-text"><Icon type={icon} className="cloud-music-asider-icon"/>{text}</div>
}

const Asider = ()=>{

  const normalWeightStyle:React.CSSProperties = {fontWeight:400,fontSize:'16px'}

  return (
    <div className="cloud-music-asider">
      <Menu mode="vertical">
        <Menu.Item index={1}>发现音乐</Menu.Item>
        <Menu.Item index={2}>视频</Menu.Item>
        <Menu.Item index={3}>朋友</Menu.Item>
        <Menu.Item index={4}>直播</Menu.Item>
        <Menu.Item index={5}>私人FM</Menu.Item>
      </Menu>
      <Menu mode="vertical" title="我的音乐">
        <Menu.Item index={1} style={normalWeightStyle}>{MenuItem('music','本地音乐')}</Menu.Item>
        <Menu.Item index={2} style={normalWeightStyle}>{MenuItem('download','下载管理')}</Menu.Item>
        <Menu.Item index={3} style={normalWeightStyle}>{MenuItem('cloud','我的音乐云盘')}</Menu.Item>
        <Menu.Item index={4} style={normalWeightStyle}>{MenuItem('fm','我的电台')}</Menu.Item>
        <Menu.Item index={5} style={normalWeightStyle}>{MenuItem('mark','我的收藏')}</Menu.Item>
      </Menu>
      <Menu mode="vertical" title="创建的歌单" closeable>
        <Menu.Item index={1} style={normalWeightStyle}>{MenuItem('love','我喜欢的音乐')}</Menu.Item>
        <Menu.Item index={2} style={normalWeightStyle}>{MenuItem('stave','正常点的')}</Menu.Item>
        <Menu.Item index={3} style={normalWeightStyle}>{MenuItem('stave','老板再来一题')}</Menu.Item>
        <Menu.Item index={4} style={normalWeightStyle}>{MenuItem('stave','叶惠美')}</Menu.Item>
        <Menu.Item index={5} style={normalWeightStyle}>{MenuItem('stave','Live')}</Menu.Item>
        <Menu.Item index={6} style={normalWeightStyle}>{MenuItem('stave','徐佳莹')}</Menu.Item>
        <Menu.Item index={7} style={normalWeightStyle}>{MenuItem('stave','冒险岛')}</Menu.Item>
      </Menu>
      <Menu mode="vertical" title="收藏的歌单" closeable>
        <Menu.Item index={1} style={normalWeightStyle}>{MenuItem('stave','宝宝巴士儿童歌曲')}</Menu.Item>
        <Menu.Item index={2} style={normalWeightStyle}>{MenuItem('stave','下雨声音纯音乐')}</Menu.Item>
        <Menu.Item index={3} style={normalWeightStyle}>{MenuItem('stave','熟悉的旋律')}</Menu.Item>
        <Menu.Item index={4} style={normalWeightStyle}>{MenuItem('stave','大提琴深深的礼赞')}</Menu.Item>
        <Menu.Item index={5} style={normalWeightStyle}>{MenuItem('stave','哈尔的移动城堡')}</Menu.Item>
        <Menu.Item index={6} style={normalWeightStyle}>{MenuItem('stave','经典英文歌')}</Menu.Item>
        <Menu.Item index={7} style={normalWeightStyle}>{MenuItem('stave','陈奕迅')}</Menu.Item>
      </Menu>
    </div>  
    )
}

export default Asider