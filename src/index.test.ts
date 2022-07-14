import {chance} from './index'

describe('Chance', () => {

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('50%', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4)

    const result = chance([50, '50%'])
    expect(result).toEqual('50%')
  })

  it('10% second position', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

    const result = chance([50, '50'], [10, '10%'])
    expect(result).toEqual('10%')
  })
})
