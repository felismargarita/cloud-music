export interface ICommentType {
  id:number
  songId:number
  songName:string
  content:string
  createdUserId:number
  createdUsername:string
  createdNickname:string
  createdTime:string
  userLike:number
  avatar:string
  referId?:number
  referComment?:ICommentType
}