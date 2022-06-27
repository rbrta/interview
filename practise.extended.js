function ex1(arr) {
  return arr.reduce((a, b) => [...a, b === false ? 2 : b], [3]);
}
console.log(ex1([2, 1, 0]));

function ex2(arr) {
  return arr.sort((a, b) => b - a > 1);
}
console.log(ex2([2, 1, 0]));
