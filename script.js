const colorBox = document.getElementById("colorBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let colorInterval;

function getRandomColor() {
  const letters = "0123456789ABCDEFGHIJK";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function startColorChange() {
  colorInterval = setInterval(() => {
    colorBox.style.backgroundColor = getRandomColor();
  }, 400);
}

function stopColorChange() {
  clearInterval(colorInterval);
}

startBtn.addEventListener("click", startColorChange);
stopBtn.addEventListener("click", stopColorChange);
