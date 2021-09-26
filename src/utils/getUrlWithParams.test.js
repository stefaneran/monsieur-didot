import getUrlWithParams from './getUrlWithParams';

describe('getUrlWithParams', () => {

  it('should return with width and height params', () => {
    const url = "http://google.com/"
    const width = 300;
    const height = 100;
    const result = getUrlWithParams(url, width, height);
    expect(result).toBe('http://google.com/?w=300&h=100')
  })

  it('should not return with only width param', () => {
    const url = "http://google.com/"
    const width = 300;
    const result = getUrlWithParams(url, width, undefined);
    expect(result).toBe('http://google.com/')
  })

  it('should not return with only height param', () => {
    const url = "http://google.com/"
    const height = 100;
    const result = getUrlWithParams(url, undefined, height);
    expect(result).toBe('http://google.com/')
  })

})