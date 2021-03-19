import React from 'react'
import Icon from '@/components/icons/Icon'
import classnames from 'classnames'
import Button from '@/components/button/Button'
interface DeliveryCommentBtnProps {
  className?:string
  onClick:()=>void
  visible?:boolean
}

const DeliveryCommentBtn:React.FC<DeliveryCommentBtnProps> = ({className,onClick,visible})=>{
  const classes = classnames('cloud-delivery-comment-btn',{
    'cloud-delivery-comment-btn-hidden':!visible
  })
  return (
    <Button className={classes} plain type="round" onClick={onClick}>
      <Icon type="pencil" size={20}/>发表我的音乐评论
    </Button>
  )
}

export default DeliveryCommentBtn