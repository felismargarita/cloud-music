export interface ICommentType {
  id:number
  songId:number
  songName:string
  content:string
  createdUserId:number
  createdUsername:string
  createdNickname:string
  createdTime:string
  like:number
  referId?:number
  referComment?:ICommentType
}