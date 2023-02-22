let num = document.querySelectorAll(".span");
let btn = document.querySelector("button");
let rate = document.querySelector(".rate");
let rating = document.querySelector(".rating");
let state = document.querySelector(".state");

num.forEach((el) => {
  el.onclick = () => {
    let number = el.textContent;
    if (el.classList.contains("num")) {
      el.classList.toggle("num");
    } else {
      num.forEach((e) => e.classList.remove("num"));
    }
    el.classList.add("num");
    btn.onclick = () => {
      if (+number == 0) {
        number = "0";
        number = "0";
      }
      console.log(number);
      state.style.cssText = "display: block;";
      rating.style.cssText = "display: none;";
      rate.textContent = `${number}`;
    };
  };
});
btn.onclick = () => {
  state.style.cssText = "display: block;";
  rating.style.cssText = "display: none;";
  rate.textContent = `${0}`;
};
