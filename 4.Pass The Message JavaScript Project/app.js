const form = document.querySelector("#message-form");

form.addEventListener("submit", function (e) {
  //   console.log("hi");

  e.preventDefault();

  const message = document.querySelector("#message");
  const feedback = document.querySelector(".feedback");
  const messageContent = document.querySelector(".message-content");

  if (message.value === "") {
    feedback.classList.replace("hide", "show");
    setTimeout(function () {
      feedback.classList.replace("show", "hide");
    }, 2000);
  } else {
    messageContent.textContent = message.value;
    message.value = "";
  }
});
