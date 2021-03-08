import React, { useEffect } from 'react'
import Icon from '@/components/icons/Icon'
import classnames from 'classnames'
export type ModeType = 'oneRound'|'allRound'|'random'|'turnList'
interface ModeProps {
    mode:ModeType,
    onChange?:(mode:ModeType)=>void
}

const modes = {
    oneRound:'单曲循环',
    allRound:'所有循环',
    random:'随机播放',
    turnList:'列表循环'
}

const Mode:React.FunctionComponent<ModeProps> = ({mode,onChange})=>{

    const [queue,setQueue] = React.useState<ModeType[]>(['oneRound','random','allRound','turnList'])
    const [classes,setClasses] = React.useState('')
    const [hidden,setHidden] = React.useState(true)
    const pushQueue = ()=>{
        const [first,...rest] = queue
        onChange?.(first)
        setQueue([...rest,first])
    }

    useEffect(()=>{
        const pureClass = 'cloud-music-play-mode-'+mode
        setClasses(pureClass+'-display')
        setTimeout(() => {
            setClasses(classnames(pureClass+'-display',pureClass+'-hidden'))
        }, 1000);
    },[queue])

    useEffect(()=>{
        setHidden(false)
    },[])

    return <div className="cloud-music-play-mode">
        {
            hidden
            ?
            null
            :
            <div className={classes}>{modes[mode]}</div>

        }
        <Icon className="cloud-music-play-mode-icon" type={mode} onClick={pushQueue}/>
    </div>
}

export default Mode