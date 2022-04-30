function submit() {
  var numA = +document.getElementById("numA").value;
  var numB = +document.getElementById("numB").value;
  var numC = +document.getElementById("numC").value;

  var evenEl = 0;
  var oddEl = 0;
  var result3 = document.getElementById("result3");
  if (isNaN(numA) === true || isNaN(numB) === true || isNaN(numC) === true) {
    result3.innerHTML = `NaN NaN NaN`;
  } else {
    if (numA % 2 == 0) {
      evenEl += 1;
    } else {
      oddEl += 1;
    }
    if (numB % 2 == 0) {
      evenEl += 1;
    } else {
      oddEl += 1;
    }
    if (numC % 2 == 0) {
      evenEl += 1;
    } else {
      oddEl += 1;
    }
    result3.innerHTML = `Có:${eventEl} số chẵn và ${oddEl} số lẻ`;
  }
}
