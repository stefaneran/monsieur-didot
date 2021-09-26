const getGuestOptions = (capacity) => {
  let options = [];
  for (let i = 1; i < capacity + 1; i++) {
    options.push(i);
  }
  return options;
}

export default getGuestOptions;