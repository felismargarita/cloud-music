import React,{useCallback} from 'react'
import useSong from '@/hooks/useSong'
import useAudio from '@/hooks/useAudio'
import classnames from 'classnames'
import moment from 'momnet'


const Lyric = ()=>{
  const {song} = useSong()
  const {currentTime} = useAudio()
  const sentences = song?.lyric?.split(/\r/).map(sentence=>{
    const [,timestamp,content] = sentence.split(/\[|\]/)
    return {timestamp,content}
  })
  console.log(sentences)
  //时间距离最近的行
  const timeDeltaList = sentences?.map(sentence=>{
    const {timestamp} = sentence
    console.log(moment(timestamp,'mm:ss.X'))
    return moment(timestamp).diff(currentTime*1000)
  })
  console.log(timeDeltaList)

  return (
    <div className="cloud-music-player-lyric">
      {
        sentences?.map(sentence=>{
          return <div key={sentence.timestamp}>
            <span>{sentence.content}</span>
          </div>
        })
      }
    </div>
  )
}
export default Lyric