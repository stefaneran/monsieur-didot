const getUrlWithParams = (imageUrl, width, height) => {
  let urlWithParams = imageUrl;
  if (width && height) {
    urlWithParams = `${imageUrl}?w=${width}&h=${height}`
  }
  return urlWithParams;
}

export default getUrlWithParams;