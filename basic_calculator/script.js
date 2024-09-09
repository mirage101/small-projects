const buttonsEl = document.querySelectorAll("button");
//const resultEl = document.getElementById('result');
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", (e) => {
    const buttonValue = e.target.textContent;
    if (buttonValue === "C") {
      clearResults();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
    //console.log(e.target.innerText); // for debug
  });
}

function clearResults() {}
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
