// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
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
