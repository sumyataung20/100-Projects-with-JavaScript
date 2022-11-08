const gettest = document.querySelectorAll(".test");

const getpre = document.querySelector(".pre");

const getnext = document.querySelector(".next");

var curridx = 1;

getpre.addEventListener("click", function () {
  slidetest((curridx -= 1));
  if (curridx < 1) {
    curridx = gettest.length;
  }
});

getnext.addEventListener("click", function () {
  slidetest((curridx += 1));
  if (curridx > gettest.length) {
    curridx = 1;
  }
});
slidetest(curridx);

function slidetest(num) {
  for (var x = 0; x < gettest.length; x++) {
    gettest[x].classList.remove("active");
  }

  if (num > gettest.length) {
    num = 1;
    curridx = 1;
  }

  if (num < 1) {
    num = gettest.length;
    curridx = gettest.length;
  }

  gettest[num - 1].classList.add("active");
}
