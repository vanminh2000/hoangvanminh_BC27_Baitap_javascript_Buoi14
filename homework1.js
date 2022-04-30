function sapXepNao() {
  var firstNumber = +document.getElementById("firstNumber").value;
  var secondNumber = +document.getElementById("secondNumber").value;
  var thirdNumber = +document.getElementById("thirdNumber").value;

  if (firstNumber < secondNumber && secondNumber < thirdNumber) {
    var minNumber = firstNumber;
    var midNumber = secondNumber;
    var maxNumber = thirdNumber;
  }
  if (firstNumber < thirdNumber && thirdNumber < secondNumber) {
    var minNumber = firstNumber;
    var midNumber = thirdNumber;
    var maxNumber = secondNumber;
  }
  if (thirdNumber < firstNumber && firstNumber < secondNumber) {
    var minNumber = thirdNumber;
    var midNumber = firstNumber;
    var maxNumber = secondNumber;
  }
  if (thirdNumber < secondNumber && secondNumber < firstNumber) {
    var minNumber = thirdNumber;
    var midNumber = secondNumber;
    var maxNumber = firstNumber;
  }
  if (secondNumber < firstNumber && firstNumber < thirdNumber) {
    var minNumber = secondNumber;
    var midNumber = firstNumber;
    var maxNumber = thirdNumber;
  } else if (secondNumber < thirdNumber && thirdNumber < firstNumber) {
    var minNumber = secondNumber;
    var midNumber = thirdNumber;
    var maxNumber = firstNumber;
  }

  //b3: Xuat ket qua ra giao dien
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("minNumber").innerHTML = "$" + minNumber;
  document.getElementById("midNumber").innerHTML = "$" + midNumber;
  document.getElementById("maxNumber").innerHTML = "$" + maxNumber;
}
