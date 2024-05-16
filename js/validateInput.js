const emailInput = document.querySelector(".login-input-field");
const emailErrorMessage = document.querySelector(".login-error-message");

const passwordInput = document.querySelector(".password-field");
const passwordErrorMessage = document.querySelector(".password-error-message");

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const isEmail = emailPattern.test(email);
  return isEmail;
};

const isPasswordValid = (password) => {
  const isPassword = password.length >= 8;
  return isPassword;
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

const validatePasswordInput = (password) => {
  if (password === "") {
    passwordInput.className += " password-field-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return;
  }

  if (!isPasswordValid(password)) {
    passwordInput.className += " password-field-error";
    passwordErrorMessage.classList += " error-message-on";
    passwordErrorMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    return;
  }

  passwordInput.classList.remove("password-field-error");
  passwordErrorMessage.classList.remove("error-message-on");
  passwordErrorMessage.textContent = "";
};

emailInput.addEventListener("focusout", () => {
  validateEmailInput(emailInput.value);
});

passwordInput.addEventListener("focusout", () => {
  validatePasswordInput(passwordInput.value);
});
