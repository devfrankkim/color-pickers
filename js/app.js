/*
=============== Variables ===============
*/
let colors = ["pink", "purple", "green", "red", "blue", "brown", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/*
=============== Functions ===============
*/

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  color.style.color = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
