let centiSecondsElapsed = 0;

let interval = null;

const time = document.getElementById("time");

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(centiSecondsElapsed / 6000);
  const seconds = Math.floor(centiSecondsElapsed / 100);
  const centiSeconds = centiSecondsElapsed % 100;

  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}: ${padStart(
    centiSeconds
  )}`;
}

function timer() {
  centiSecondsElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 10);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  centiSecondsElapsed = 0;
  setTime();
}
