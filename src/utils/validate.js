/**
 * @author
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber (value) {
  const reg = /^[0-9]*$/
  return reg.test(value)
}
/**
 * @author
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank (value) {
  return (
    value == null ||
    false ||
    value === '' ||
    value.trim() === '' ||
    value.toLocaleLowerCase().trim() === 'null'
  )
}
