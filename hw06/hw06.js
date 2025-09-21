let numA = Number(prompt("Mời bạn nhập vào số a!"));
let numB = Number(prompt("Mời bạn nhập vào số b!"));
let ketQua;
let dauBieuThuc = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");

switch (dauBieuThuc) {
  case "+":
    ketQua = numA + numB;
    alert(`Kết quả của phép tính a + b = ${ketQua}`);
    break;
  case "-":
    ketQua = numA - numB;
    alert(`Kết quả của phép tính a + b = ${ketQua}`);
    break;
  case "*":
    ketQua = numA * numB;
    alert(`Kết quả của phép tính a + b = ${ketQua}`);
    break;
  case "/":
    ketQua = numA / numB;
    alert(`Kết quả của phép tính a + b = ${ketQua}`);
    break;

  default:
    break;
}