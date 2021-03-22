import {Reducer} from 'umi'
export interface SongState {
  currentLyric?:string
}

export interface SongListInterface {
  state:SongState,
  reducers:{
    updateCurrentLyric:Reducer<SongState>,
  },
}


const SongModal:SongListInterface= {
  state:{currentLyric:''},
  reducers: {
    updateCurrentLyric(state, {currentLyric}){
      return {currentLyric}
    },
  },
}
export default SongModal
