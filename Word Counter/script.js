const body = document.querySelector(".body");
const aboutBtn = document.querySelector(".abt-btn");
const label = document.querySelector(".label");
const textArea = document.querySelector(".textArea");
const navbar = document.querySelector(".navbar");
const nightBtn = document.querySelector(".night-btn");
const img = document.querySelector(".dark-img");
const charCountBtn = document.querySelector(".letter-count");
const wordCountBtn = document.querySelector(".word-count");
const wordResult = document.querySelector(".result-word");
const charResult = document.querySelector(".result-char");

const toggleNightMode = () => {
  nightBtn.addEventListener("click", () => {
    let darkMode = nightBtn.getAttribute("data-black");
    if (darkMode === "false") {
      nightBtn.setAttribute("data-black", true);
      img.setAttribute("src", "./sun.png");
      body.classList.add("dark-mode");
      aboutBtn.classList.add("white-text");
      label.classList.add("white-text");
      textArea.classList.add("dim-text-area");
      navbar.classList.add("nav-border");
    } else {
      nightBtn.setAttribute("data-black", false);
      img.setAttribute("src", "./moon.png");
      body.classList.remove("dark-mode");
      aboutBtn.classList.remove("white-text");
      label.classList.remove("white-text");
      textArea.classList.remove("dim-text-area");
      navbar.classList.remove("nav-border");
    }
  });
};

const countCharacters = () => {
  charCountBtn.addEventListener("click", () => {
    let texts = textArea.value;
    let result = texts.length;
    charResult.textContent = result;
  });
};

const getWords = (str) => {
  return str.trim().split(/\s+/).length;
};

const countWords = () => {
  wordCountBtn.addEventListener("click", () => {
    let texts = textArea.value;
    let result = getWords(texts);
    wordResult.textContent = result;
  });
};

toggleNightMode();
countCharacters();
countWords();
