// 출력 해보기
// var currentYear = 2023;
// document.write(currentYear);


// if 문 써보기
var userNumber = prompt("숫자를 입력하세요.");
if (userNumber !== null) {
  if (userNumber % 3 == 0) {
    document.write(userNumber + "는 3의 배수 입니다.");
  } else {
    document.write(userNumber + "는 3의 배수가 아닙니다.");
  }
}
else {
  alert("입력이 취소됐습니다.")
}