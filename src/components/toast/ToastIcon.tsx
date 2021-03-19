import React from 'react'
import Icon from '@/components/icons/Icon'
interface ToastIconProps {
  type:'info'|'success'|'warn'|'error'
}

const ToastIcon:React.FC<ToastIconProps> = ({type})=>{

  return (
    <div className="cloud-music-toast-icon">
      <Icon type={type} size={13} style={{color:'#000'}}/>
    </div>
  )
}

export default ToastIcon