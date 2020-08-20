function averageFunc(arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / arr.length;
}
const analyze = arr => {
  const obj = {};
  obj.average = averageFunc(arr);
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.lengthOfArray = arr.length;
  return obj;
};

module.exports = analyze;
