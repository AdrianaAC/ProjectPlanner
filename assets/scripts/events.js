const button = document.querySelector("button");

// button.onclick = function() {
    // console.log("clicked");
// };

const buttonClickHandler = () => {alert("clicked twice once!")};

// button.onclick = buttonClickHandler;

button.addEventListener("dblclick", buttonClickHandler);

setTimeout(() => {
  button.removeEventListener("dblclick", buttonClickHandler);
}, 5000);

const secondBtn = () => {alert("dbl click twice")};

button.addEventListener("dblclick", secondBtn)
