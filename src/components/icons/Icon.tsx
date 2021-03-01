import React from 'react'
import classnames from 'classnames'
import music from '@/components/icons/svg/music.svg'
import download from '@/components/icons/svg/download.svg'
import cloud from '@/components/icons/svg/cloud.svg'
import fm from '@/components/icons/svg/fm.svg'
import mark from '@/components/icons/svg/mark.svg'
import stave from '@/components/icons/svg/stave.svg'
import love from '@/components/icons/svg/love.svg'

const svgs = {
  'music':music,
  'download':download,
  'cloud':cloud,
  'fm':fm,
  'mark':mark,
  'stave':stave,
  'love':love
}

export type IconType = 'music'|'download'|'cloud'|'fm'|'mark'|'stave'|'love'

interface IconProps {
  type:IconType
  className?:string
}

const Icon:React.FC<IconProps> = ({type,className})=>{
  const classes = classnames('cloud-music-icon',className)
  return (
    <img className={classes} src={svgs[type]}/>
  )
}

export default Icon