export interface ISong {
  id:number
  singer:string; //歌手名称
  singerId:number //歌手Id
  name:string; //歌曲名称
  songUrl:string; //歌曲URL
  duration:number;
  introduction?:string; //介绍
  pictureUrl?:string; //封面URL
  lyric?:string; //歌词
  album?:string; //专辑
  albumId?:number; //专辑ID
  deliveryTime?:string;//发行时间
  createdTime:string;
  updatedTime:string;
}