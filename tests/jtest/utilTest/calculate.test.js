/* eslint-disable no-undef */
import { accAdd, accMul } from '../../../src/utils/calculate'

describe('test accAdd', () => {
  it('add 0.1 + 0.2 to equal 0.3', () => {
    const sum = accAdd(0.1, 0.2)
    expect(sum).toMatch('0.3')
  })
  it('add 1 + 0.3 to equal 1.3', () => {
    const sum = accAdd(1, 0.3)
    expect(sum).toMatch('1.3')
  })
  it('add 0 + 0.0 to equal 0', () => {
    const sum = accAdd(0, 0.0)
    expect(sum).toMatch('0')
  })
})

describe('test accMul', () => {
  it('mul 0.1 * 0.2 to equal 0.02', () => {
    const mul = accMul(0.1, 0.2)
    expect(mul).toMatch('0.02')
  })
})
