let canNang = Number(prompt("Hãy nhập vào số cân nặng của bạn với đơn vị kg!"));
let chieuCao = Number(prompt("Hãy nhập vào số chiều cao của bạn với đơn vị m!"));

let diemBMI = (canNang/(chieuCao*chieuCao)).toFixed(1);

if (diemBMI < 18.5) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Cân nặng của bạn hơi thấp!`);
} else if (diemBMI >= 18.5 && diemBMI <= 24.9) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Cân nặng của bạn bình thường!`);
} else if (diemBMI === 25) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Cân nặng của bạn hơi cao!`);
} else if (diemBMI > 25 && diemBMI <= 29.9) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Bạn đang bị tiền béo phì!`);
} else if (diemBMI >= 30 && diemBMI <= 34.9) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Bạn đang bị béo phì cấp độ 1!`);
} else if (diemBMI >= 35 && diemBMI <= 39.9) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Bạn đang bị béo phì cấp độ 2!`);
} else if (diemBMI >= 40) {
  alert(`Chỉ số BMI của bạn là ${diemBMI}. Bạn đang bị béo phì cấp độ 3!`)
}
  