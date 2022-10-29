const getbtn = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = ["green", "red", "steelblue", "gray", "purple", "orange"];
body.style.backgroundColor = "steelblue";
getbtn.addEventListener("click", function () {
  changecolor();
});

function changecolor() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
