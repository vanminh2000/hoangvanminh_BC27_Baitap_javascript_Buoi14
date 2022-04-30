function admit4() {
  var numberI = document.getElementById("I").value;
  var numberL = document.getElementById("L").value;
  var numberU = document.getElementById("U").value;

  if (numberI === numberL && numberL === numberU) {
    document.getElementById("equilateral").innerHTML = "Day la tam giac deu";
  } else if (
    numberI === numberL ||
    numberL === numberU ||
    numberU === numberI
  ) {
    document.getElementById("isosceles").innerHTML = "Day la tam giac can";
  } else if (
    numberI * numberI === numberL * numberL + numberU * numberU ||
    numberL * numberL === numberU * numberU + numberI * numberI ||
    numberU * numberU === numberL * numberL + numberI * numberI
  ) {
    document.getElementById("right").innerHTML = "Day la tam giac vuong";
  } else {
    document.getElementById("none").innerHTML = "day la mot loai tam nao";
  }
  document.getElementById("result4").style.display = "block";
}
