import React from 'react'
import Icon from '@/components/icons/Icon'

export type ModeType = 'oneRound'|'allRound'|'random'|'turnList'
interface ModeProps {
    mode:ModeType,
    onChange?:(mode:ModeType)=>void
}

const Mode:React.FunctionComponent<ModeProps> = ({mode,onChange})=>{

    const [queue,setQueue] = React.useState<ModeType[]>(['oneRound','random','allRound','turnList'])

    const pushQueue = ()=>{
        const [first,...rest] = queue
        onChange?.(first)
        setQueue([...rest,first])
    }
    return <Icon className={`cloud-music-play-mode-${mode}`} type={mode} onClick={pushQueue}/>
}

export default Mode