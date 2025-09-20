let num = 1;

while (num >0) {
  let numOfYear = Number(prompt("Hãy nhập số năm bạn muốn kiểm tra: "));

  if ((numOfYear%4 === 0 && numOfYear%100 !== 0) || numOfYear%400 === 0) {
    alert("Đây là năm nhuận!");
  } else if((numOfYear%100 === 0 && numOfYear%400 !== 0) || numOfYear%4 !== 0) {
    alert("Đây không phải là năm nhuận!");
  }
}