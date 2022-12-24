const button = document.querySelector(".btn");
const cards = document.querySelector(".cards");

// writing a function for generating a random color

const generateColor = () => {
  const str = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length));
  }
  return result;
};

/// Now generate 100 div with classname of colors

const generateDiv = () => {
  for (let i = 0; i < 100; i++) {
    const colorBox = document.createElement("div");
    colorBox.className = "colors";
    // Append these div inside of cards
    cards.appendChild(colorBox);
  }
};

generateDiv();

// give these colorboxes a generated background color

const colorBg = () => {
  const colorBoxes = document.querySelectorAll(".colors");
  for (const box of colorBoxes) {
    let color = generateColor();
    box.innerHTML = `#${color}`;
    box.style.backgroundColor = `#${color}`;
  }
};

colorBg();

// Generate new color on button click

button.addEventListener("click", () => {
  colorBg();
});

/*



*/
