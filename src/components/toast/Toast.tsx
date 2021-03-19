import ToastIcon from './ToastIcon'
import {ToastProps,toast} from './Index'

const typeToast = (type:'info'|'success'|'warn'|'error')=>{
  return (props:ToastProps)=>{
    const {content,...rest} = props
    toast({
      content:(
        <div className=""><ToastIcon type={type}/>
          <div className="cloud-music-toast-content">
            {content}
          </div>
        </div>
      ),
      ...rest
    })
}
}

export default {
  error:typeToast('error'),
  success:typeToast('success'),
  info:typeToast('info'),
  warn:typeToast('warn'),
  toast
}