import {useMemo,useCallback} from 'react'
import {useSelector,useDispatch} from 'umi'
import {SongListState} from '@/models/SongList'
import {ISong} from '@/types/SongType'
import _ from 'lodash'
const getNextIndex = (index:number,list:any[])=>{
  if(index < list.length - 1){
    return index + 1
  }else{
    return 0
  }
}

const getLastIndex = (index:number,list:any[])=>{
  if(index > 0){
    return index - 1
  }else {
    return list.length - 1
  }
}

const getRandomIndex =(index:number,list:any[]) =>{
  const leftIndexes = list.map((el,i)=>i).filter(i=>i!==index)
  const rangdomIndex = _.random(0,leftIndexes.length -1);
  return leftIndexes[rangdomIndex]
}

export default ()=>{
  const {list,index} = useSelector((state:{songList:SongListState})=>state.songList)
  const dispatch = useDispatch()
  const song = useMemo(()=>list[index],[list,index]) as ISong|undefined

  const previous = useCallback(()=>{
    dispatch({type:'songList/changeIndex',index:getLastIndex(index,list)})
  },[index,list])

  const next = useCallback(()=>{
    dispatch({type:'songList/changeIndex',index:getNextIndex(index,list)})
  },[index,list])

  const random = useCallback(()=>{
    dispatch({type:'songList/changeIndex',index:getRandomIndex(index,list)})
  },[index,list])

  return {song,previous,next,random}
}