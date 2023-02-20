const container = document.querySelector(".container");

// Generating colors
const generateColor = () => {
  const str = "ABCDEF0123456789";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += str.charAt(Math.floor(Math.random() * str.length));
  }
  return `#${color}`;
};

// Generating boxes
const generateBoxes = () => {
  for (let i = 0; i < 12; i++) {
    const boxes = document.createElement("div");
    boxes.className = "box";
    boxes.setAttribute("data-content", "Click to copy code");
    container.appendChild(boxes);
  }
};
generateBoxes();

const giveBGColor = () => {
  const colorBoxes = document.querySelectorAll(".box");
  for (const box of colorBoxes) {
    let color = generateColor();
    box.innerHTML = color;
    box.style.backgroundColor = color;
  }
};
giveBGColor();

const listenClick = () => {
  const colorBoxes = document.querySelectorAll(".box");
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", () => {
      colorBoxes[i].setAttribute("data-content", "Code copied");
      setTimeout(() => {
        colorBoxes[i].setAttribute("data-content", "Click to Copy Code");
      }, 5000);
    });
  }
};
listenClick();

const copyOnClipboard = () => {
  const colorBoxes = document.querySelectorAll(".box");
  for (const box of colorBoxes) {
    box.addEventListener("click", async () => {
      const currentClr = box.innerHTML;
      try {
        await navigator.clipboard.writeText(currentClr);
        navigator.vibrate(500);
      } catch (err) {
        console.error("Got error", err);
      }
    });
  }
};

copyOnClipboard();

// Infinite Loading
let wait = false;
const waitTime = 5000;
window.addEventListener("scroll", function () {
  if (
    !wait &&
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight
  ) {
    wait = true;
    setTimeout(() => {
      generateBoxes();
      giveBGColor();
      wait = false;
    }, waitTime);
  }
});

window.addEventListener("touchmove", function () {
  if (
    !wait &&
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight
  ) {
    wait = true;
    setTimeout(() => {
      generateBoxes();
      giveBGColor();
      wait = false;
    }, waitTime);
  }
});
