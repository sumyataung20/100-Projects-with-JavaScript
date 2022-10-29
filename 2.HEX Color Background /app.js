(function () {
  const getbtn = document.querySelector(".btn");
  const value = document.getElementById("hex-value");
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const body = document.querySelector("body");

  getbtn.addEventListener("click", changeHex);

  function changeHex() {
    let hex = "#";

    for (var x = 0; x < 6; x++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }
})();
