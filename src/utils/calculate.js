import { isNumber } from './validate'

/**
 * 加法函数，用来得到精确的加法结果
 * @param {Object} arg1
 * @param {Object} arg2
 */
export function accAdd (arg1, arg2) {
  if (isNaN(arg1)) {
    arg1 = 0
  }
  if (isNaN(arg2)) {
    arg2 = 0
  }
  arg1 = Number(arg1)
  arg2 = Number(arg2)

  var r1, r2, m, n
  try {
    if (Math.round(arg1) === arg1) {
      r1 = 0
    } else {
      r1 = arg1.toString().split('.')[1].length
    }
  } catch (e) {
    alert('arg1参数不正确' + e.name)
  }
  try {
    if (Math.round(arg2) === arg2) {
      r2 = 0
    } else {
      r2 = arg2.toString().split('.')[1].length
    }
  } catch (e) {
    alert('arg2参数不正确' + e.name)
  }
  m = Math.pow(10, Math.max(r1, r2)) // 动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m + arg2 * m) / m).toFixed(n)
}

/**
* 乘法函数，用来得到精确的乘法结果
* @param {Object} arg1
* @param {Object} arg2
*/
export function accMul (arg1, arg2) {
  var m = 0
  var s1 = arg1.toString()
  var s2 = arg2.toString()
  try {
    if (isNumber(s1)) {
      m += 0
    } else {
      m += s1.split('.')[1].length
    }
  } catch (e) {
    alert('arg1参数不正确' + e.name)
  }
  try {
    if (isNumber(s2)) {
      m += 0
    } else {
      m += s2.split('.')[1].length
    }
  } catch (e) {
    alert('arg2参数不正确' + e.name)
  }
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)).toFixed(2)
}
