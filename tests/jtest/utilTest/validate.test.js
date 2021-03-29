/* eslint-disable no-undef */
import { isNumber, isBlank } from '../../../src/utils/validate'

// eslint-disable-next-line no-undef
describe('test isNumber', () => {
  it('judge 123 is number equal true', () => {
    const ret = isNumber(123)
    expect(ret).toBe(true)
  })
  it('judge "123" is number equal true', () => {
    const ret = isNumber('123')
    expect(ret).toBe(true)
  })
})

describe('test isBlank', () => {
  it('judge "" is blank equal true', () => {
    const ret = isBlank('')
    expect(ret).toBe(true)
  })
  it('judge " " is blank equal true', () => {
    const ret = isBlank(' ')
    expect(ret).toBe(true)
  })
  it('judge "test" is not blank equal false', () => {
    const ret = isBlank('test')
    expect(ret).toBe(false)
  })
})
