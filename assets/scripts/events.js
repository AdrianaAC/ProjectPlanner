const button = document.querySelector("button");
const div = document.querySelector("div");
let countingClick = 0;

// button.onclick = function() {
// console.log("clicked");
// };

const buttonClickHandler = () => {
  console.log("click");
};

// button.onclick = buttonClickHandler;

button.addEventListener("click", buttonClickHandler);

const clickerCounter = () => {
  countingClick ++;
  console.log(countingClick);
};

div.addEventListener("click", clickerCounter);
