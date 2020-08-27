const averageFunc = arr => {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum / arr.length;
};
const analyze = arr => ({
  average: averageFunc(arr),
  min: Math.min(...arr),
  max: Math.max(...arr),
  lengthOfArray: arr.length,
});

export default analyze;
