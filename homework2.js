function pleaseAnswer() {
  var machineUser = document.getElementById("machineUser").value;
  document.getElementById("answerHoho").style.display = "block";

  if (machineUser === "father") {
    document.getElementById("answerText").innerHTML = "Chao Cha";
  } else if (machineUser === "mother") {
    document.getElementById("answerText").innerHTML = "Chao Me";
  } else if (machineUser === "son") {
    document.getElementById("answerText").innerHTML = "Chao Anh";
  } else if (machineUser === "daughter") {
    document.getElementById("answerText").innerHTML = "Chao Em";
  }
}
