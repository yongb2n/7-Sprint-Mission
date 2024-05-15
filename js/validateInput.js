let isEmailValid = false;
let isPasswordValid = false;

const emailInput = document.querySelector(".login-input-field");
const emailErrorMessage = document.querySelector(".error-message");

const validateEmailInput = (email) => {
  if (email === "") {
    emailInput.className += " login-input-error";
    emailErrorMessage.classList += " error-message-on";
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return;
  }
};

emailInput.addEventListener("focusout", () => {
  validateEmailInput(emailInput.value);
});
