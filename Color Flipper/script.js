const container = document.querySelector(".container");
const button = document.querySelector(".btn");

let characters = "ABCDEF0123456789";

function randomColor() {
     let result = "";
     for (let i = 0; i < 6; i++) {
          result += characters.charAt(
               Math.floor(Math.random() * characters.length)
          );
     }
     button.style.color = `#${result}`;
     container.style.backgroundColor = `#${result}`;
}
