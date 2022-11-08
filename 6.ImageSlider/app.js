const getimg = document.querySelectorAll(".view");

const getprebtn = document.querySelector(".pre");

const getnextbtn = document.querySelector(".next");

var curridx = 1;

getprebtn.addEventListener("click", function () {
  slidenum((curridx -= 1));

  if (curridx < 0) {
    curridx = getimg.length;
  }
});

getnextbtn.addEventListener("click", function () {
  slidenum((curridx += 1));

  if (curridx > getimg.length) {
    curridx = 1;
  }
});

function slidenum(num) {
  for (var x = 0; x < getimg.length; x++) {
    getimg[x].classList.remove("active");
  }

  if (num > getimg.length) {
    num = 1;
    curridx = 1;
  }

  if (num < 1) {
    num = getimg.length;
    curridx = getimg.length;
  }

  getimg[num - 1].classList.add("active");
}
