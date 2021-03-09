export interface IPaginationRes<T=any> {
  current:number
  size:number
  total:number
  pages:number
  records:Array<T>
}