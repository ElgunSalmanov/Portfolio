const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector(".sending-success");
const errorNodes = document.querySelectorAll(".panel-error");
const button = document.querySelector(".sending-button");

// for validate data function
function validateForm() {
  clearMessages();

  let errorFlag = false;

  if (nameInput.value.length < 3) {
    errorNodes[0].innerText = "Name cannot be blank";
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    errorFlag = true;
  }

  if (message.value.length < 10) {
    errorNodes[2].innerText = "Please enter a message";
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Success!";
  }
}

// clear messages
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }

  success.innerText = "";
}

// email validation function
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

button.addEventListener("click", () => {
  clearMessages();
  validateForm();
});
