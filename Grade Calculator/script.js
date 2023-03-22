const gradeInput = document.querySelector(".inputbox__number");
const button = document.querySelector(".inputbox__btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const grade = gradeInput.value;
  if (isInputEmpty(grade)) console.log("wrong input..");
  else console.log(turnIntoNumber(grade));
});

const isInputEmpty = (input) => {
  return input.length <= 0;
};

const turnIntoNumber = (input) => {
  const checkingValue = input * 1;
  return checkingValue;
};
