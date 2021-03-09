import _ from 'lodash'
import {Action,Effect,Reducer,Subscription} from 'umi'
import {ISong} from '@/types/SongType'
import {getMyList} from '@/services/apiList'
export interface SongListState {
  index:number
  list:ISong[]
}

export interface SongListInterface {
  state:SongListState,
  effects:{
    getList:Effect,
  },
  reducers:{
    update:Reducer<SongListState>,
    changeIndex:Reducer<SongListState>,
  },
  subscriptions: { setup: Subscription }
}


const SongListModal:SongListInterface= {
  state:{index:0,list:[]},
  reducers: {
    update(state, {list}){
      return {index:state?.index||0,list}
    },
    changeIndex(state,{index}){
      const list = state?.list || []
      return {list,index}
    }
  },
  effects:{
    *getList(action:Action,{put,call}){
      const list = yield call(getMyList)
      yield put({type:'update',list})
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
