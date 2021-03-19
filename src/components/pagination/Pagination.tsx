import React from 'react'
import Icon from '@/components/icons/Icon'
import Item from './Item'
import classnames from 'classnames'
interface PaginationProps {
  total:number
  current:number
  pageSize:number
  className?:string
  onChange?:(current:number,size:number)=>void
  style?:React.CSSProperties
}

const Pagination:React.FC<PaginationProps> = ({total,current,pageSize,onChange,className,style})=>{  
  let paginations:Array<number> = []

  const totalPage = Math.ceil(total/pageSize)
  if(totalPage<=10){
    paginations = new Array(totalPage).fill(0).map((key,index)=>index + 1)
  }else{
    //当总页数大于10时,需要计算被选中的页面是否需要 左省略和右省略 0代表省略号
    let omitLeft = current>=6
    let omitRight = totalPage - current >=6
    const toolArray = [1,2,3,4,5,6,7,8]
    if(!omitLeft && omitRight){
      paginations = [...toolArray,0,totalPage]
    }
    if(omitLeft && !omitRight){
      paginations = [1,0,...toolArray.reverse().map(v=>totalPage-v+1)]
    }
    if(omitLeft && omitRight){
      paginations = [1,0,current-3,current-2,current-1,current,current+1,current+2,current+3,0,totalPage]
    }
  }

  

  const render = (
    <>
    {paginations.map((pageNumber,index)=>{
      if(pageNumber){
        return (
          <Item 
            onClick={()=>{
              if(pageNumber === current){
                return
              }
              onChange?.(pageNumber,pageSize)
            }}
            className={pageNumber === current ? 'cloud-music-pagination-item-selected' :''} 
            key={index}>{pageNumber}</Item>
        )
      }else{
        return (
          <Item 
            className="cloud-music-pagination-item-omit"
            key={index}><Icon type="omit"/></Item>
        )
      }
    })}
    </>
  )
  const classes = classnames('cloud-music-pagination',className)
  return (
    <div className={classes} style={style}>
      <Item 
      className={current === 1 ? 'cloud-music-pagination-item-disabled':''} 
      onClick={()=>{
        if(current>1){
          onChange?.(current-1,pageSize)
        }
      }}>
        <Icon type="arrowLeft" size={12}/>
      </Item>
      {render}
      <Item 
      className={current === totalPage ? 'cloud-music-pagination-item-disabled':''}
      onClick={()=>{
        if(current < totalPage){
          onChange?.(current+1,pageSize)
        }
      }}>
        <Icon type="arrowRight" size={12}/>
      </Item>
    </div>
  )
}
export default Pagination