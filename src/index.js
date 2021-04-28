// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

let characters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  6,
  7,
  8,
  9,
  "!",
  "§",
  "$",
  "%",
  "&",
  "?",
  "@",
  "€",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const characters2 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

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

document
  .querySelector("#char")
  .addEventListener("click", () => passwordGen(characters2));
document
  .querySelector("#btn")
  .addEventListener("click", () => passwordGen(characters));
