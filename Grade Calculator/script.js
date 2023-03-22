const gradeInput = document.querySelector(".inputbox__number");
const button = document.querySelector(".inputbox__btn");
const userGrades = document.querySelector(".your__grades");
const testTaken = document.querySelector(".taken__test");
const totalGrades = document.querySelector(".grade__total");
const avgGrades = document.querySelector(".avg__grade");
const passedGrades = document.querySelector(".pass__grades");
const failedGrades = document.querySelector(".fail__grades");
const gradesRaised = document.querySelector(".raised__grades");

let grades = [];

button.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = gradeInput.value;
  if (isInputEmpty(userInput)) alert("PLEASE FILL YOUR MARKS!");
  else {
    if (isIntoRange(userInput)) {
      const grade = turnIntoNumber(userInput);
      grades.push(grade);

      userGrades.innerHTML = grades.join(", ");
      testTaken.innerHTML = totalSubjects(grades);
      totalGrades.innerHTML = marksSum(grades);
      avgGrades.innerHTML = marksAverage(grades);
      passedGrades.innerHTML = percentage(grades) + "%";
      failedGrades.innerHTML = yourGrade(grades);
      gradesRaised.innerHTML = maximumMarks(grades);
    } else alert("ONLY BETWEEN 0 TO 100!");
  }
  gradeInput.value = "";
});

const isInputEmpty = (input) => {
  return input.length <= 0;
};

const turnIntoNumber = (input) => {
  const checkingValue = input * 1;
  return checkingValue;
};

const isIntoRange = (input) => {
  const number = turnIntoNumber(input);
  return number >= 0 && number <= 100;
};

const totalSubjects = (grades) => {
  return grades.length;
};

const marksSum = (grades) => {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });
  return sum;
};

const marksAverage = (grades) => {
  const numberOfSubjects = totalSubjects(grades);
  const sumOfMarks = marksSum(grades);
  const avg = sumOfMarks / numberOfSubjects;
  return Math.floor(avg * 100) / 100;
};

const percentage = (grades) => {
  const totalMarks = marksSum(grades);
  const numberOfSubjects = totalSubjects(grades);
  const percent = totalMarks / numberOfSubjects;
  return Math.floor(percent * 100) / 100;
};

const yourGrade = (grades) => {
  const percent = percentage(grades);
  const result =
    percent > 90
      ? "A+"
      : percent > 80
      ? "A"
      : percent > 70
      ? "B"
      : percent > 60
      ? "C"
      : percent > 50
      ? "D"
      : percent > 40
      ? "E"
      : percent > 30
      ? "E"
      : "FAIL";
  return result;
};

const maximumMarks = (grades) => {
  const numberOfSubjects = totalSubjects(grades);
  return numberOfSubjects * 100;
};
