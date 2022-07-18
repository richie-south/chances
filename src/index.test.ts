import {chance} from './index'

describe('Chance', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('Should match "50%" event chance', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4)

    const result = chance([50, '50%'])
    expect(result).toEqual('50%')
  })

  it('Should not match any chance', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

    const result = chance([50, '50%'])
    expect(result).toEqual(undefined)
  })

  it('Should match "10%" event chance', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6)

    const result = chance([50, '50'], [10, '10%'])
    expect(result).toEqual('10%')
  })

  it('Should throw when total value is larger than 100', () => {
    expect(() => chance([10, '90%'], [90, '90%'], [5, '5%'])).toThrow()
  })
})
