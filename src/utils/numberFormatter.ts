/**
 * 数字格式化
 * @count 
 * return 当数字大于等于10000时用简写成XX万,小于1万时直接显示原数字
 */
export default (count:number)=>{
  const value = Math.abs(count)
  const  str = value>=10000 ? Math.floor(count/10000)+'万' : value.toString()
  return count > 0 ? str : ('-' + str)
}