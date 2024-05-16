const emailInput = document.querySelector(".login-input-field");
const emailErrorMessage = document.querySelector(".error-message");

const isEmailValid = (email) => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = pattern.test(email);
  return isEmail;
};

const validateEmailInput = (email) => {
  if (email === "") {
    emailInput.className += " login-input-error";
    emailErrorMessage.classList += " error-message-on";
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return;
  }

  if (!isEmailValid(email)) {
    emailInput.className += " login-input-error";
    emailErrorMessage.classList += " error-message-on";
    emailErrorMessage.textContent = "올바른 이메일을 입력해주세요.";
    return;
  }

  emailInput.classList.remove("login-input-error");
  emailErrorMessage.classList.remove("error-message-on");
  emailErrorMessage.textContent = "";
};

emailInput.addEventListener("focusout", () => {
  validateEmailInput(emailInput.value);
});
