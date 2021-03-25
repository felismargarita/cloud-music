import {useState,useEffect} from 'react'
import ColorThief from 'colorthief'
import useSong from './useSong'
import _ from 'lodash'

const standard = 240
const fadeColor = (color:number,fade:number)=>{
  if(color>standard){
    return color
  }
  const delta = 255 - color
  return color + delta*(fade/100)
}

export default (fade:number)=>{
  const [color,setColor] = useState<{r:number,g:number,b:number}>({r:255,g:255,b:255})
  const {song} = useSong()
    //提取颜色
    useEffect(()=>{
      const img = document.querySelector('.cloud-music-player-gramo-pic') as HTMLImageElement
      if(song){
        if(img){
          img.onload = ()=>{
          const colorThief = new ColorThief()
          const [r,g,b] = colorThief.getColor(img)
          setColor({
            r:fadeColor(r,fade),
            g:fadeColor(g,fade),
            b:fadeColor(b,fade)
          })
          }
        }
      }
      return ()=>{
        if(img){
          img.onload=null
        }
      }
    },[song])
  
  return color
}