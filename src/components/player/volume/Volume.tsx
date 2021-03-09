import React from 'react'
import DraggableBar from '@/components/darggableBar/DraggableBar'
import Icon from '@/components/icons/Icon'
interface VolumeProps {
    onChange?:(value:number)=>void
    value?:number
}

const Volume:React.FC<VolumeProps> = ({onChange,value})=>{
    const ref = React.useRef(0) //存储静音前的音量

    const iconProps = {
        style:{fontSize:'22px'},
        className:'cloud-music-player-volume-icon',
        onClick:()=>{
            if(value === 0){
                const lastVolume = ref.current || 0.5
                onChange?.(lastVolume)
            }
            if(value && value>0){
                ref.current = value
                onChange?.(0)
            }
        }
    }
    const volumeIcon = value === 0 
                        ?
                        <Icon type="volumeSilent" {...iconProps}/>
                        :
                        <Icon type="volumeNormal" {...iconProps}/>

    return (
        <div className="cloud-music-player-volume-container">
            {volumeIcon}
            <div className="cloud-music-player-volume">
                <DraggableBar value={value} onChange={onChange} range={[0,100]}/>
            </div>
        </div>

    )
}

export default Volume