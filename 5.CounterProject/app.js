var getnumber = document.getElementById("number");
var getlowerbtn = document.getElementById("minus");
var getaddbtn = document.getElementById("plus");
var number = 0;

getlowerbtn.addEventListener("click", function () {
  number -= 1;
  getnumber.textContent = number;

  if (number < 0) {
    window.alert("minus value is unavailable");
    getnumber.textContent = 0;
  }
});

getaddbtn.addEventListener("click", function () {
  number += 1;
  getnumber.textContent = number;
});
