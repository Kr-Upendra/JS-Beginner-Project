const showModel = document.querySelector(".show-model");
const modelBox = document.querySelector(".model");
const closeModel = document.querySelector(".close");
const humorPara = document.querySelector(".humor");
const generateHumorBtn = document.querySelector(".get-new");

const showContent = () => {
  modelBox.setAttribute("data-shown", "true");
  showModel.textContent = "Close";
};

const closeContent = () => {
  modelBox.setAttribute("data-shown", "false");
  showModel.textContent = "Show";
};

const eventListener = (x) => {
  x.addEventListener("click", () => {
    const isShown = modelBox.getAttribute("data-shown");
    if (isShown === "false") showContent();
    else closeContent();
  });
};

eventListener(showModel);
eventListener(closeModel);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    closeContent();
  }
});

const getJokes = () => {
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => response.json())
    .then((data) => (humorPara.innerHTML = data.joke));
};

generateHumorBtn.addEventListener("click", () => {
  getJokes();
});
