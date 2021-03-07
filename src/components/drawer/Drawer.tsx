import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
interface DrawerProps {
    content:string
    visible:boolean
    delay?:number
    className?:string
}

const Drawer:React.FC<DrawerProps> = ({content,className,visible,delay})=>{
    const drawerRef = React.useRef<HTMLDivElement>(null)
    const [renderFinish,setFinish] = React.useState(false)
    const [timeoutVisible,setVisible] = React.useState(false)
    const classes = classnames('cloud-music-drawer',className)
    const height = drawerRef.current?.clientHeight
    const style:React.CSSProperties = {
        position:'absolute',
        transition:'top 0.3s',
        left: 0,
        top: timeoutVisible ? 0 : (height ? -(height+1) :0)
    }
    useEffect(()=>{
        setFinish(true)
    },[])


    //处理防抖,这里采用司徒正美的思路简单实现一下:每次抖动都去清理掉timer
    const timerRef = React.useRef<{timer:any}>({timer:null}) 
    useEffect(()=>{
        clearTimeout(timerRef.current.timer)
        timerRef.current.timer = setTimeout(()=>{
            setVisible(visible)
        },delay)
        return ()=>clearTimeout(timerRef.current.timer)
    },[visible])

    return (
        <div className={classes} ref={drawerRef} style={renderFinish ? style : {opacity:0}}>
            {content}
        </div>
    )
}

Drawer.defaultProps = {
    delay: 0
}

export default Drawer

//留点想说的话
//这个组件抽屉需要根据文字内容自动加宽或者加高内容,也就是dom渲染成功之前是不知道具体的组件大小的.
//那也以为着tansition属性无法作用在一个可度量的css值上.....难点就在这里.....
//思路:
//1.先渲染,但是加上一个opacity:0,完全透明隐藏,等到渲染成功后,通过js获取其宽高值
//2.获取到宽高值之后opacity:1,使其不透明,再通过绝对定位隐藏到合适的位置