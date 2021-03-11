import {useMemo,useCallback, useState} from 'react'
import {useSelector,useDispatch} from 'umi'
import {SongListState} from '@/models/SongList'
import {ISong} from '@/types/SongType'
import _ from 'lodash'

const getRandomIndex =(index:number,list:any[]) =>{
  const leftIndexes = list.map((el,i)=>i).filter(i=>i!==index)
  const rangdomIndex = _.random(0,leftIndexes.length -1);
  return leftIndexes[rangdomIndex]
}

export default ()=>{
  const {list,id,historyList} = useSelector((state:{songList:SongListState})=>state.songList)
  const dispatch = useDispatch()
  const song = useMemo(()=>list.find(song=>song.id === id),[list,id]) as ISong|undefined
  const [hisIndex,setHisIndex] = useState(0) //是否处在回退播放历史的过程中

  //上一首
  const previous = useCallback(()=>{
    console.log(historyList,hisIndex)
    if(historyList.length && hisIndex<historyList.length -1){
      const lastIndex = hisIndex+1
      setHisIndex(lastIndex)
      dispatch({type:'songList/changeIdNoHis',id:historyList[lastIndex]})
    }
  },[id,list,hisIndex,historyList])

  //下一首
  const next = useCallback(()=>{
    if(hisIndex>0){
      const nextIndex = hisIndex - 1
      dispatch({type:'songList/changeIdNoHis',id:historyList[nextIndex]})
      setHisIndex(nextIndex)
    }else{
      let nextIndex = 0
      const currentIndex = list.findIndex(song=>song.id === id)
      if(currentIndex < list.length -1){
        nextIndex = currentIndex + 1
      }
      dispatch({type:'songList/changeId',id:list[nextIndex].id})
    }
  },[id,list,hisIndex,historyList])

  
  //除本首歌之外的随机一首
  const random = useCallback(()=>{
    if(hisIndex>0){
      const nextIndex = hisIndex - 1
      dispatch({type:'songList/changeIdNoHis',id:historyList[nextIndex]})
      setHisIndex(nextIndex)
    }else{
      const currentIndex = list.findIndex(song=>song.id === id)
      const randomIndex = getRandomIndex(currentIndex,list)
      dispatch({type:'songList/changeId',id:list[randomIndex].id})
    }
  },[id,list,hisIndex,historyList])

  const change = useCallback((changeId:number)=>{
    dispatch({type:'songList/changeId',id:changeId})
  },[])

  return {song,previous,next,random,change}
}