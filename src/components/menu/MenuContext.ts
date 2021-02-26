import {createContext} from 'react'


interface IContext {
  currentIndex:number
  mode?:'horizontal'|'vertical'
  setIndex?:(index:number)=>void
  onSelect?:(index:number)=>void
}

export default createContext<IContext>({currentIndex:0,mode:'horizontal'})