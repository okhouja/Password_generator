let elem = document.querySelector('input[type="range"]');

let rangeValue = function () {
  let newValue = elem.value;
  let target = document.querySelector(".value");
  target.innerHTML = newValue;
};

elem.addEventListener("input", rangeValue);

let characters =
  "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_=+*/€><{}[]:;.,";

const characters2 =
  "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbol = "!@#$%^&*()_=+*/€><{}[]:;.,";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

const passwordGen = (arr) => {
  let result = "";
  let randomNum;
  let num = document.querySelector("#num").value;
  for (let i = 0; i < num; i++) {
    randomNum = Math.floor(Math.random() * arr.length);
    // result = result + characters[randomNum];
    result += arr[randomNum];
  }
  return (document.querySelector("#password").innerHTML = result);
};

// document
//   .querySelector("#char")
//   .addEventListener("click", () => passwordGen(characters2));
document
  .querySelector("#btn")
  .addEventListener("click", () => passwordGen(characters));

document
  .querySelector("#symbol")
  .addEventListener("click", () => passwordGen(symbol));

document
  .querySelector("#number")
  .addEventListener("click", () => passwordGen(numbers));

document
  .querySelector("#lowercase")
  .addEventListener("click", () => passwordGen(lowerCase));

document
  .querySelector("#uppercase")
  .addEventListener("click", () => passwordGen(upperCase));
