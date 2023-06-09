const days = document.querySelectorAll(".day-name");
const monthName = document.querySelector(".el-month-name");
const yearNum = document.querySelector(".el-year");
const dates = document.querySelector(".el-dates");
const calenderContainer = document.querySelector(".date__container");
const buttons = document.querySelectorAll(".btns");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

days[date.getDay()].classList.add("current-day");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const generateCalender = () => {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const lastDay = new Date(year, month, lastDate).getDay();
  const previousMonthLastDate = new Date(year, month, 0).getDate();
  console.log({ firstDay, lastDate, lastDay, previousMonthLastDate });
  let calender = "";
  for (let i = firstDay; i > 0; i--) {
    calender += `<div class='el-dates' data-unactive='true'>${
      previousMonthLastDate - i + 1
    }</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const today =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "current-date"
        : "";

    calender += `<div class="${today} el-dates">${i}</div>`;
  }

  for (let i = lastDay; i < 6; i++) {
    calender += `<div class="el-dates" data-unactive="true">${
      i - lastDay + 1
    }</div>`;
  }
  monthName.textContent = `${monthNames[month]}`;
  yearNum.textContent = `${year}`;

  calenderContainer.innerHTML = calender;
};

generateCalender();

buttons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "prev-cal" ? month - 1 : month + 1;
    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    generateCalender();
  });
});
