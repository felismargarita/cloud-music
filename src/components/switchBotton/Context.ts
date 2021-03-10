import React from 'react'

interface IContext  {
  currentIndex:number
  width?:number
  setIndex?:(index:number)=>void
  onChange?:(index:number)=>void
}
export const context = React.createContext<IContext>({currentIndex:0})