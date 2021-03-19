import React from 'react'
import Button from '@/components/button/Button'
import Icon from '@/components/icons/Icon'
import classnames from 'classnames'
interface WriteCommentBtnProps {
  className?:string
  onClick:()=>void
  visible?:boolean
}

const WriteCommentBtn:React.FC<WriteCommentBtnProps> = ({onClick,visible})=>{
  const classes = classnames('cloud-write-comment-btn',{
    'cloud-write-comment-btn-hidden':visible
  })
  return (
    <div>
      <Button className={classes} plain type="round" onClick={onClick}>  
        <Icon type="pencil" size={20}/>写评论
      </Button>
    </div>
  )
}
export default WriteCommentBtn