module.exports = function reverse(num) {
  const numToStr = num.toString().split('').reverse().join('');
  return Number.parseInt(numToStr, 10);
};
