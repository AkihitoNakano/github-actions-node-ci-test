import * as calc from './calc'
import * as text from './text'
import { setTimer } from './async'

describe('calculate', () => {
  it('add', () => {
    const res1 = calc.add(1, 1)
    expect(res1).toBe(2)
  })
  it('text match', () => {
    const res2 = text.isTextMatch('hello', 'hello')
    expect(res2).toBe(true)
  })
  it('async/await', async () => {
    const res3 = await setTimer()
  })
})
