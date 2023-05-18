var num1 = parseInt(prompt("첫 번째 수를 입력하세요"));
var num2 = parseInt(prompt("두 번째 수를 입력하세요"));

sumMulti(num1, num2);

function sumMulti(x, y) {
  let result;
  if (x === y) {
    result = x * y;
  }
  else {
    result = x + y;
  }

  console.log(result);
}