var i;
var num = parseInt(prompt("몇 까지 3의 배수를 찾을까요?", "100"));
var count = 0;

if (num !== null) {
  for(i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
      document.write(i + ", ");
      count += 1;
    }
  }
}
else {
  document.write("취소하였습니다.")
}
document.write("<br>");
document.write(num + "까지 3의 배수의 개수 : " + count);