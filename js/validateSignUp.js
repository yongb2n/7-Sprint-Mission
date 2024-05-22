const emailInput = document.querySelector(".auth-input-field");
const emailErrorMessage = document.querySelector(".email-error-message");

const passwordInput = document.querySelector(".auth-password-field");
const passwordErrorMessage = document.querySelector(".password-error-message");

const verifyPasswordInput = document.querySelector(".verify-password-field");
const verifyPasswordErrorMessage = document.querySelector(
  ".verify-password-error-message"
);

const nicknameInput = document.querySelector(".nickname-input-field");
const nicknameErrorMessage = document.querySelector(".nickname-error-message");

const loginButton = document.querySelector(".auth-button");

let isEmailNotEmpty = false;
let isNicknameNotEmpty = false;
let isPasswordNotEmpty = false;
let isVerifyPasswordNotEmpty = false;
let emailValidationResult = false;
let nicknameValidationResult = false;
let passwordValidationResult = false;
let verifyPasswordValidationResult = false;

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return emailPattern.test(email);
};

const isPasswordValid = (password) => {
  return password.length >= 8;
};

const setAuthInputError = (input, err, text) => {
  input.classList.add("auth-input-error");
  err.classList.add("error-message-on");
  err.textContent = text;
};

const toggleAuthInputError = (input, err, text) => {
  input.classList.toggle("auth-input-error", true);
  err.classList.toggle("error-message-on", true);
  err.textContent = text;
};

const removeAuthInputError = (input, err) => {
  input.classList.remove("auth-input-error");
  err.classList.remove("error-message-on");
  err.textContent = "";
};

const setNicknameInputError = (input, err, text) => {
  input.classList.add("nickname-input-error", true);
  err.classList.add("error-message-on", true);
  err.textContent = text;
};

const removeNicknameInputError = (input, err) => {
  input.classList.remove("nickname-input-error");
  err.classList.remove("error-message-on");
  err.textContent = "";
};

const setPasswordInputError = (input, err, text) => {
  input.classList.add("password-field-error");
  err.classList.add("error-message-on");
  err.textContent = text;
};

const togglePasswordInputError = (input, err, text) => {
  input.classList.toggle("password-field-error", true);
  err.classList.toggle("error-message-on", true);
  err.textContent = text;
};

const removePasswordInputError = (input, err) => {
  input.classList.remove("password-field-error");
  err.classList.remove("error-message-on");
  err.textContent = "";
};

const setVerifyPasswordInputError = (input, err, text) => {
  input.classList.add("password-field-error");
  err.classList.add("error-message-on");
  err.textContent = text;
};

const toggleVerifyPasswordInputError = (input, err, text) => {
  input.classList.toggle("password-field-error", true);
  err.classList.toggle("error-message-on", true);
  err.textContent = text;
};

const removeVerifyPasswordInputError = (input, err) => {
  input.classList.remove("password-field-error");
  err.classList.remove("error-message-on");
  err.textContent = "";
};

const validateEmailInput = (email) => {
  if (email === "") {
    setAuthInputError(emailInput, emailErrorMessage, "이메일을 입력해주세요.");
    return false;
  }

  if (!isEmailValid(email)) {
    toggleAuthInputError(
      emailInput,
      emailErrorMessage,
      "잘못된 이메일 형식입니다."
    );
    return false;
  }

  removeAuthInputError(emailInput, emailErrorMessage);
  return true;
};

const validateNicknameInput = (nickname) => {
  if (nickname === "") {
    setNicknameInputError(
      nicknameInput,
      nicknameErrorMessage,
      "닉네임을 입력해주세요."
    );
    return false;
  }

  removeNicknameInputError(nicknameInput, nicknameErrorMessage);
  return true;
};

const validatePasswordInput = (password) => {
  if (password === "") {
    setPasswordInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return false;
  }

  if (!isPasswordValid(password)) {
    togglePasswordInputError(
      passwordInput,
      passwordErrorMessage,
      "비밀번호를 8자 이상 입력해주세요."
    );
    return false;
  }

  removePasswordInputError(passwordInput, passwordErrorMessage);
  return true;
};

const validateVerifyPasswordInput = (password, verifyPassword) => {
  if (verifyPassword === "") {
    setVerifyPasswordInputError(
      verifyPasswordInput,
      verifyPasswordErrorMessage,
      "비밀번호를 입력해주세요."
    );
    return false;
  }

  if (password !== verifyPassword) {
    toggleVerifyPasswordInputError(
      verifyPasswordInput,
      verifyPasswordErrorMessage,
      "비밀번호가 일치하지 않습니다."
    );
    return false;
  }

  removeVerifyPasswordInputError(
    verifyPasswordInput,
    verifyPasswordErrorMessage
  );
  return true;
};

const handleInput = () => {
  const isFormValid =
    isEmailNotEmpty &&
    isNicknameNotEmpty &&
    isPasswordNotEmpty &&
    isVerifyPasswordNotEmpty &&
    emailValidationResult &&
    nicknameValidationResult &&
    passwordValidationResult &&
    verifyPasswordValidationResult;

  loginButton.disabled = !isFormValid;
  loginButton.classList.toggle("button-disabled", !isFormValid);
};

const handleEmailInput = () => {
  emailValidationResult = validateEmailInput(emailInput.value);
  isEmailNotEmpty = emailInput.value !== "";
  handleInput();
};

const handleNicknameInput = () => {
  nicknameValidationResult = validateNicknameInput(nicknameInput.value);
  isNicknameNotEmpty = nicknameInput.value !== "";
  handleInput();
};

const handlePasswordInput = () => {
  passwordValidationResult = validatePasswordInput(passwordInput.value);
  isPasswordNotEmpty = passwordInput.value !== "";
  handleInput();
};

const handleVerifyPasswordInput = () => {
  verifyPasswordValidationResult = validateVerifyPasswordInput(
    passwordInput.value,
    verifyPasswordInput.value
  );
  isVerifyPasswordNotEmpty = verifyPasswordInput.value !== "";
  handleInput();
};

emailInput.addEventListener("focusout", () => {
  validateEmailInput(emailInput.value);
});

nicknameInput.addEventListener("focusout", () => {
  validateNicknameInput(nicknameInput.value);
});

passwordInput.addEventListener("focusout", () => {
  validatePasswordInput(passwordInput.value);
});

verifyPasswordInput.addEventListener("focusout", () => {
  validateVerifyPasswordInput(passwordInput.value, verifyPasswordInput.value);
});

emailInput.addEventListener("input", handleEmailInput);
nicknameInput.addEventListener("input", handleNicknameInput);
passwordInput.addEventListener("input", handlePasswordInput);
verifyPasswordInput.addEventListener("input", handleVerifyPasswordInput);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    isEmailNotEmpty &&
    isNicknameNotEmpty &&
    isPasswordNotEmpty &&
    isVerifyPasswordNotEmpty &&
    emailValidationResult &&
    nicknameValidationResult &&
    passwordValidationResult &&
    verifyPasswordValidationResult
  ) {
    window.location.href = "/signin.html";
  }
});
