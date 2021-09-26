import getGuestOptions from './getGuestOptions';

describe('getGuestOptions', () => {

  it('works with 1', () => {
    const value = 1;
    const result = getGuestOptions(value);
    expect(result).toEqual([1]);
  })

  it('works with 4', () => {
    const value = 4;
    const result = getGuestOptions(value);
    expect(result).toEqual([1, 2, 3, 4]);
  })

  it('works with 7', () => {
    const value = 7;
    const result = getGuestOptions(value);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  })

})