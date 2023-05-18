let num1 = parseInt(prompt("첫 번째 숫자를 입력하세요"));
let num2 = parseInt(prompt("두 번째 숫자를 입력하세요"));

compareNumbers(num1, num2);

function compareNumbers(x, y) {
  if (x > y) {
    alert(x + "(이)가 " + y + "보다 큽니다.");
  } else if (x === y) {
    alert("같습니다.");
  } else {
    alert(x + "(이)가 " + y + "보다 작습니다.");
  }
}