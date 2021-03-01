import React from 'react'
import Menu from '@/components/menu/Menu'
import Carousel from '@/components/carousel/Carousel'
import PageHeader from '@/components/header/PageHeader'
import CalendarCard from './calendar/CalendarCard'
import moment from 'moment'
import {carouselCards,recommendCards,exclusiveDeliveries,newestMusics,mvs,lives,lookList} from './data'
import RecommendCard from './recommond/RecommendCard'
import ExclusiveCard from './exclusiveCard/ExclusiveCard'
import NewestMusic from './newestMusic/NewestMusic'
import RecoMv from './recoMv/RecoMv'
import LiveCard from './live/LiveCard'
import Look from './look/Look'
const Discovery = ()=>{

  return (
    <div>
      <Menu>
        <Menu.Item index={1}>个性推荐</Menu.Item>
        <Menu.Item index={2}>歌单</Menu.Item>
        <Menu.Item index={3}>主播电台</Menu.Item>
        <Menu.Item index={4}>排行榜</Menu.Item>
        <Menu.Item index={5}>歌手</Menu.Item>
        <Menu.Item index={6}>最新音乐</Menu.Item>
      </Menu>
      <Carousel cards={carouselCards} className="cloud-music-discovery-carousel"/>
      <PageHeader content="推荐歌单"/>
      <div className="cloud-music-discovery-cards">
        <CalendarCard time={moment()}/>
        {
          recommendCards.map((card,index)=>(
            <RecommendCard {...card} key={index}/>
          ))
        }
      </div>
      <PageHeader content="独家放送"/>
      <div className="cloud-music-discovery-cards">
        {
          exclusiveDeliveries.map((card,index)=>(
            <ExclusiveCard key={index} {...card}/>
          ))
        }
      </div>
      <PageHeader content="最新音乐"/>
      <div className="cloud-music-discovery-cards">
        {
          newestMusics.map((card,index)=>(
            <NewestMusic key={index} {...card}/>
          ))
        }
      </div>
      <PageHeader content="推荐MV"/>
      <div className="cloud-music-discovery-cards">
        {
          mvs.map((card,index)=>(
            <RecoMv key={index} {...card}/>
          ))
        }
      </div>
      <PageHeader content="主播电台"/>
      <div className="cloud-music-discovery-cards">
        {
          lives.map((card,index)=>(
            <LiveCard key={index} {...card}/>
          ))
        }
      </div>
      <PageHeader content="看看"/>
      <div className="cloud-music-discovery-cards">
        {
          lookList.map((card,index)=>(
            <Look key={index} {...card}/>
          ))
        }
      </div>
    </div>
  )
}

export default Discovery