const emailInput = document.querySelector(".auth-input-field");
const emailErrorMessage = document.querySelector(".email-error-message");

const passwordInput = document.querySelector(".auth-password-field");
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
    emailInput.classList.add("auth-input-error");
    emailErrorMessage.classList.add("error-message-on");
    emailErrorMessage.textContent = "이메일을 입력해주세요.";
    return;
  }

  if (!isEmailValid(email)) {
    emailInput.classList.remove("auth-input-error");
    emailErrorMessage.classList.remove("error-message-on");

    emailInput.classList.add("auth-input-error");
    emailErrorMessage.classList.add("error-message-on");
    emailErrorMessage.textContent = "잘못된 이메일 형식입니다.";
    return;
  }

  emailInput.classList.remove("auth-input-error");
  emailErrorMessage.classList.remove("error-message-on");
  emailErrorMessage.textContent = "";
};

const validatePasswordInput = (password) => {
  if (password === "") {
    passwordInput.classList.add("password-field-error");
    passwordErrorMessage.classList.add("error-message-on");
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요.";
    return;
  }

  if (!isPasswordValid(password)) {
    passwordInput.classList.remove("password-field-error");
    passwordInput.classList.remove("error-message-on");

    passwordInput.classList.add("password-field-error");
    passwordErrorMessage.classList.add("error-message-on");
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
