import formatNumber from './formatNumber';

describe('formatNumber', () => {

  it('formats decimals', () => {
    const value = 100.59;
    const result = formatNumber(value)
    expect(result).toBe('100.59');
  })

  it('formats thousands', () => {
    const value = 2999;
    const result = formatNumber(value)
    expect(result).toBe('2,999');
  })

  it('formats tens of thousands', () => {
    const value = 12875;
    const result = formatNumber(value)
    expect(result).toBe('12,875');
  })

  it('formats hundreds of thousands', () => {
    const value = 350200;
    const result = formatNumber(value)
    expect(result).toBe('350,200');
  })

  it('formats millions', () => {
    const value = 4200555;
    const result = formatNumber(value)
    expect(result).toBe('4,200,555');
  })

})