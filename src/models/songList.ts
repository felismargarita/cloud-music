import _ from 'lodash'
import {Action,Effect,Reducer,Subscription} from 'umi'
import {ISong} from '@/types/SongType'
import {getMyList} from '@/services/apiList'
export interface SongListState {
  id:number
  list:ISong[]
}

export interface SongListInterface {
  state:SongListState,
  effects:{
    getList:Effect,
  },
  reducers:{
    update:Reducer<SongListState>,
    changeId:Reducer<SongListState>,
  },
  subscriptions: { setup: Subscription }
}


const SongListModal:SongListInterface= {
  state:{id:0,list:[]},
  reducers: {
    update(state, {list,id}){
      return {list,id}
    },
    changeId(state,{id}){
      const list = state?.list || []
      return {list,id}
    }
  },
  effects:{
    *getList(action:Action,{put,call}){
      const list = yield call(getMyList)
      const id = list[0].id
      yield put({type:'update',list,id})
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
