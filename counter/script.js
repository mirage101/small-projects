let num = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

console.log(value);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      num--;
    } else if (styles.contains("increase")) {
      num++;
    } else {
      num = 0;
    }

    if (num < 0) {
      value.style.color = "red";
      num = 0;
    } else if (num > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
    value.textContent = num;
  });
});
