const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const alertEl = document.querySelector(".alert-container");
const copyIcon = document.querySelector(".fa-copy");

btnEl.addEventListener("click", () => {
  generatePassword();
});

function generatePassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(password);
  inputEl.value = password;
}

copyIcon.addEventListener("click", () => {
  if (inputEl.value) {
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputEl.value);
    alertEl.classList.remove("active");
    alertEl.innerText = "Password copied to clipboard";
    setTimeout(() => {
      alertEl.classList.add("active");
      alertEl.innerText = "";
    }, 2000);
  }
});
