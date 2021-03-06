import React from 'react'
import classnames from 'classnames'
import music from '@/components/icons/svg/music.svg'
import download from '@/components/icons/svg/download.svg'
import cloud from '@/components/icons/svg/cloud.svg'
import fm from '@/components/icons/svg/fm.svg'
import mark from '@/components/icons/svg/mark.svg'
import stave from '@/components/icons/svg/stave.svg'
import love from '@/components/icons/svg/love.svg'
import next from '@/components/icons/svg/next.svg' 
import previous from '@/components/icons/svg/previous.svg' 
import play from '@/components/icons/svg/play.svg' 
import pause from '@/components/icons/svg/pause.svg' 
const svgs = {
  'music':music,
  'download':download,
  'cloud':cloud,
  'fm':fm,
  'mark':mark,
  'stave':stave,
  'love':love,
  'play':play,
  'pause':pause,
  'next':next,
  'previous':previous
}

export type IconType = 'music'|'download'|'cloud'|'fm'|'mark'|'stave'|'love'|'previous'|'next'|'play'|'pause'

interface IconProps {
  type:IconType
  className?:string
  style?:React.CSSProperties
  size?:number
}

const Icon:React.FC<IconProps> = ({type,className,size})=>{
  const classes = classnames('cloud-music-icon',className)
  return (
    svgs[type]
  )
}

Icon.defaultProps = {
  size:24
}

export default Icon