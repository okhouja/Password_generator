let elem = document.querySelector('input[type="range"]');

let rangeValue = function () {
  let newValue = elem.value;
  let target = document.querySelector(".value");
  target.innerHTML = newValue;
};

elem.addEventListener("input", rangeValue);

//let characters =
// "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_=+*/€><{}[]:;.,";

let characters = "";

//const characters2 =
// "0123456789ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbols = "!@#$%^&*()_=+*/€><{}[]:;.,";
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

const passwordGen = () => {
  let characters = "";
  let result = "";
  let randomNum;
  let num = document.querySelector("#num").value;

  if (document.querySelector("#number").checked) {
    characters = characters + numbers;
  }

  if (document.querySelector("#symbol").checked) {
    characters = characters + symbols;
  }
  if (document.querySelector("#lowercase").checked) {
    characters = characters + lowerCase;
  }
  if (document.querySelector("#uppercase").checked) {
    characters = characters + upperCase;
  }
  const arr = characters.split("") || [""];

  for (let i = 0; i < num; i++) {
    randomNum = Math.floor(Math.random() * arr.length);
    // result = result + characters[randomNum];
    result += arr[randomNum];
  }
  return (document.querySelector("#password").innerHTML = result);
};

document
  .querySelector("#btn")
  .addEventListener("click", () => passwordGen(characters));

document
  .querySelector("#symbol")
  .addEventListener("click", () => passwordGen(symbols));

document
  .querySelector("#number")
  .addEventListener("change", () => passwordGen(numbers));

document
  .querySelector("#lowercase")
  .addEventListener("click", () => passwordGen(lowerCase));

document
  .querySelector("#uppercase")
  .addEventListener("click", () => passwordGen(upperCase));

// function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.
function disableOnlyCheckbox() {
  let totalChecked = [number, symbol, lowercase, uppercase].filter(
    (el) => el.checked
  );
  totalChecked.forEach((el) => {
    if (totalChecked.length == 1) {
      el.disabled = true;
    } else {
      el.disabled = false;
    }
  });
}

[uppercase, lowercase, number, symbol].forEach((el) => {
  el.addEventListener("click", () => {
    disableOnlyCheckbox();
  });
});
