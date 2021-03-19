import React from 'react'
import classnames from 'classnames'
import RCDialog from 'rc-dialog'
import 'rc-dialog/assets/index.css'
import Icon from '@/components/icons/Icon'
interface DialogProps {
  visible?:boolean
  onCancel?:()=>void
  className?:string
  bodyStyle?:React.CSSProperties
  title?:React.ReactNode
  modalRender?:(node:React.ReactNode)=>React.ReactNode|undefined
}

const Dialog:React.FC<DialogProps> = ({visible,children,onCancel,title,className,modalRender,bodyStyle})=>{
  const classes = classnames('cloud-music-dialog',className)
  return (
    <RCDialog 
    visible={visible} 
    onClose={onCancel}
    className={classes}
    modalRender={modalRender}
    bodyStyle={bodyStyle}
    title={title}
    wrapClassName="cloud-music-dialog-wrapper"
    keyboard={false}
    width={472}
    closeIcon={<Icon type="close" size={16}/>}
    maskStyle={{background:'none'}}>
      {children}
    </RCDialog>
  )
}

export default Dialog