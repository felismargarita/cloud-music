import React from 'react'
import Menu from '@/components/menu/Menu'
import Carousel from '@/components/carousel/Carousel'
import PageHeader from '@/components/header/PageHeader'
import CalendarCard from './calendar/CalendarCard'
import moment from 'moment'
const cards = [
  {
    text:'独家',
    img:'http://felis.top:9000/picture?md5=9062dc80bb47556c3565efa18f1dcc32'
  },
  {
    text:'独家',
    img:'http://felis.top:9000/picture?md5=5624a16a955d3f52088afe8b5eb5bb12'
  },
  {
    text:'新碟首发',
    img:'http://felis.top:9000/picture?md5=98cfacc930a291d70d72eb1b447fe2b0'
  },
  {
    text:'MV首发',
    img:'http://felis.top:9000/picture?md5=d6d853c35dd5d0fffec8a7509a13c070'
  },
  {
    text:'独家',
    img:'http://felis.top:9000/picture?md5=2b97b3ec46feb33141d313e5379d8fd8'
  },
  {
    text:'新歌首发',
    img:'http://felis.top:9000/picture?md5=ae05e981386806b0dde1f848f7333937'
  },
  {
    text:'独家',
    img:'http://felis.top:9000/picture?md5=cfc889c49b92312bcb26fe8fc7e1e896'
  },
  {
    text:'新歌首发',
    img:'http://felis.top:9000/picture?md5=6e9bdc761b49f6dc95bfda35b1981636'
  },
  {
    text:'独家',
    img:'http://felis.top:9000/picture?md5=54298ef6444d6fa77584922e883ac5ca'
  }
]

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
      <Carousel cards={cards}/>
      <PageHeader content="推荐歌单"/>
      <CalendarCard time={moment()}/>
    </div>
  )
}

export default Discovery