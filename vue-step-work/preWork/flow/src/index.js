/* @flow */ 
// 顶部标记, 书写了文件才会flow检测
function add(m: number, n: number): number {
  return m + n;
}
add(1, '3');