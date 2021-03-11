import {useMemo,useCallback} from 'react'
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
  const {list,id} = useSelector((state:{songList:SongListState})=>state.songList)
  const dispatch = useDispatch()
  const song = useMemo(()=>list.find(song=>song.id === id),[list,id]) as ISong|undefined
  const currentIndex = useMemo(()=>list.findIndex(song=>song.id === id),[id,list])
  //上一首
  const previous = useCallback(()=>{
    let previousIndex = 0
    if(currentIndex>0){
      previousIndex = currentIndex - 1
    }
    if(currentIndex === 0){
      previousIndex = list.length - 1
    } 
    console.log(list[previousIndex].id)
    dispatch({type:'songList/changeId',id:list[previousIndex].id})
  },[id,list])

  //下一首
  const next = useCallback(()=>{
    let nextIndex = 0
    if(currentIndex < list.length -1){
      nextIndex = currentIndex + 1
    }
    dispatch({type:'songList/changeId',id:list[nextIndex].id})
  },[id,list])

  
  //除本首歌之外的随机一首
  const random = useCallback(()=>{
    const randomIndex = getRandomIndex(currentIndex,list)
    dispatch({type:'songList/changeId',id:list[randomIndex].id})
  },[id,list])

  const change = useCallback((changeId:number)=>{
    dispatch({type:'songList/changeId',id:changeId})
  },[])

  return {song,previous,next,random,change}
}