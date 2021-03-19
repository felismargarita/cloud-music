import React from 'react'
import Icon from '@/components/icons/Icon'
import classnames from 'classnames'
interface BackTopProps {
  target:()=>HTMLElement
  visible:boolean
}

const BackTop:React.FC<BackTopProps> = ({target,visible})=>{

  const classes = classnames('cloud-music-backtop',{
    'cloud-music-backtop-hidden':!visible
  })

  return (
    <div className={classes} onClick={()=>{
      target().scrollTop = 0
    }}>
      <Icon type="arrowUp" size={13}/>
    </div>
  )
}

export default BackTop