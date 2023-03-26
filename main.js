const canvas = document.getElementById("captchaCanvas");
const ctx = canvas.getContext("2d");
const input = document.getElementById("captchaInput");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha = "";
for (let i = 0; i < 6; i++) {
  captcha += chars.charAt(Math.floor(Math.random() * chars.length));
}

ctx.font = "48px sans-serif";
ctx.fillText(captcha, 10, 50);

document.querySelector("form").addEventListener("submit", (e) => {
  if (input.value !== captcha) {
    e.preventDefault();
    alert("Incorrect captcha");
  } else {
    alert("Success");
  }
});
