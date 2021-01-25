export default (callback) => {
  return [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 32, 34, 36, 48, 50, 54]
    .map(callback)
    .join('');
}
