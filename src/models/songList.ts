import _ from 'lodash'
import {Action,Effect,Reducer,Subscription} from 'umi'
import {ISong} from '@/types/SongType'
import {getMyList} from '@/services/apiList'
export interface SongListState {
  id:number //当前歌曲的ID
  list:ISong[] //当前所有列表
  historyList:number[] //记录播放历史ID
}

export interface SongListInterface {
  state:SongListState,
  effects:{
    getList:Effect,
  },
  reducers:{
    update:Reducer<SongListState>,
    changeId:Reducer<SongListState>,
    changeIdNoHis:Reducer<SongListState>,
  },
  subscriptions: { setup: Subscription }
}


const SongListModal:SongListInterface= {
  state:{id:0,list:[],historyList:[]},
  reducers: {
    update(state, {list,id,historyList}){
      return {list,id,historyList}
    },
    changeId(state,{id}){
      const list = state?.list || []
      const historyList = (state?.historyList || []).filter(hisId=>hisId !== id) //维护一份播放历史列表
      return {list,id,historyList:[id,...historyList]}
    },
    changeIdNoHis(state,{id}){
      const list = state?.list || []
      const historyList = state?.historyList || []
      return {list,historyList,id}
    },
  },
  effects:{
    *getList(action:Action,{put,call}){
      const list = yield call(getMyList)
      const id = list[0].id
      yield put({type:'update',list,id,historyList:[id]})
    }
  },
  subscriptions:{
    setup({ dispatch, history }){
      return history.listen(({pathname})=>{
        if(pathname === '/'){
          dispatch({
            type: 'getList',
          })
        }
      })
    }
  }
}
export default SongListModal
