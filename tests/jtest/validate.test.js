/* eslint-disable no-undef */
import { isNumber, isBlank } from '../../src/utils/validate'
// eslint-disable-next-line no-undef
test('judge 123 is number', () => {
  const ret = isNumber(123)
  expect(ret).toBe(true)
})

test('judge "123" is number', () => {
  const ret = isNumber('123')
  expect(ret).toBe(true)
})

test('judge "" is blank', () => {
  const ret = isBlank('')
  expect(ret).toBe(true)
})
test('judge " " is blank', () => {
  const ret = isBlank(' ')
  expect(ret).toBe(true)
})
test('judge "test" is not blank', () => {
  const ret = isBlank('test')
  expect(ret).toBe(false)
})
