const days = document.querySelectorAll(".day-name");

const activateCurrentDate = () => {
  const date = new Date();
  const day = date.getDay();
  days[day].classList.add("current-day");
};

activateCurrentDate();

let currentIndex = 1;
showSlides(currentIndex);

function plusSlides(n) {
  showSlides((currentIndex += n));
}

function showSlides(n) {
  let monthBoxes = document.querySelectorAll(".el-month");
  let i;
  if (n > monthBoxes.length) currentIndex = 1;
  if (n < 1) currentIndex = monthBoxes.length;
  for (i = 0; i < monthBoxes.length; i++) {
    monthBoxes[i].style.display = "none";
  }
  monthBoxes[currentIndex - 1].style.display = "block";
}
