function ex1() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
  console.log(i);
}
ex1();

function ex2(arr) {
  const res = arr.reduce((a, b) => [...a, b + 1 || 2], [3]);
  console.log(res);
}
ex2([-1, 0, 1, 2]);

function ex3(arr) {
  const res = arr.sort();
  console.log(res);
}
ex3([3, 2, 1, 33, 22, 11, 111]);
