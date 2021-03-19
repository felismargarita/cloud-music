import React from 'react'
import Icon from '@/components/icons/Icon'
interface ToastIconProps {
  type:'error'
}

const ToastIcon:React.FC<ToastIconProps> = ()=>{

  return (
    <div className="cloud-music-toast-icon">
      <Icon type="close" size={13} style={{color:'#000'}}/>
    </div>
  )
}

export default ToastIcon