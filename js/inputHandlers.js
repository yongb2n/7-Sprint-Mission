import * as inputValidators from "./inputValidators.js";
import * as domElements from "./domElements.js";

let isEmailNotEmpty = false;
let isNicknameNotEmpty = false;
let isPasswordNotEmpty = false;
let isVerifyPasswordNotEmpty = false;
let emailValidationResult = false;
let nicknameValidationResult = false;
let passwordValidationResult = false;
let verifyPasswordValidationResult = false;

export const handleInput = () => {
  const isFormValid =
    isEmailNotEmpty &&
    isPasswordNotEmpty &&
    emailValidationResult &&
    passwordValidationResult &&
    (domElements.verifyPasswordInput
      ? isVerifyPasswordNotEmpty && verifyPasswordValidationResult
      : true) &&
    (domElements.nicknameInput
      ? isNicknameNotEmpty && nicknameValidationResult
      : true);

  if (domElements.loginButton) {
    domElements.loginButton.disabled = !isFormValid;
    domElements.loginButton.classList.toggle("button-disabled", !isFormValid);
  }

  if (domElements.signupButton) {
    domElements.signupButton.disabled = !isFormValid;
    domElements.signupButton.classList.toggle("button-disabled", !isFormValid);
  }
};

export const handleEmailInput = () => {
  emailValidationResult = inputValidators.validateEmailInput(
    domElements.emailInput,
    domElements.emailErrorMessage
  );
  isEmailNotEmpty = domElements.emailInput.value !== "";
  handleInput();
};

export const handleNicknameInput = () => {
  nicknameValidationResult = inputValidators.validateNicknameInput(
    domElements.nicknameInput,
    domElements.nicknameErrorMessage
  );
  isNicknameNotEmpty = domElements.nicknameInput.value !== "";
  handleInput();
};

export const handlePasswordInput = () => {
  passwordValidationResult = inputValidators.validatePasswordInput(
    domElements.passwordInput,
    domElements.passwordErrorMessage
  );
  isPasswordNotEmpty = domElements.passwordInput.value !== "";
  handleInput();
};

export const handleVerifyPasswordInput = () => {
  verifyPasswordValidationResult = inputValidators.validateVerifyPasswordInput(
    domElements.passwordInput,
    domElements.verifyPasswordInput,
    domElements.verifyPasswordErrorMessage
  );
  isVerifyPasswordNotEmpty = domElements.verifyPasswordInput.value !== "";
  handleInput();
};

export const isFormValid = () => {
  return (
    isEmailNotEmpty &&
    isPasswordNotEmpty &&
    emailValidationResult &&
    passwordValidationResult &&
    (domElements.verifyPasswordInput
      ? isVerifyPasswordNotEmpty && verifyPasswordValidationResult
      : true) &&
    (domElements.nicknameInput
      ? isNicknameNotEmpty && nicknameValidationResult
      : true)
  );
};
