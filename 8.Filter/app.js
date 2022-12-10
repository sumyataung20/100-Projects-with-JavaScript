const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll(".store-item");

// console.log(buttons);
// console.log(storeItems);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("hi");
    const filter = e.target.dataset.filter;

    storeItems.forEach((item) => {
      if (filter === "all") {
        item.style.dislay = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

// filter box
(function () {
  const searchBox = document.querySelector("#search-item");
  const storeItems = document.querySelectorAll(".store-item");

  searchBox.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
    //display only items that contain filter input

    storeItems.forEach((item) => {
      if (item.textContent.includes(searchFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
