(function () {
  let hr = document.querySelector(".hour");
  let min = document.querySelector(".minute");
  let sec = document.querySelector(".second");

  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countdownTimer = null;

  startBtn.addEventListener("click", (e) => {
    if (hr.value == 0 && min.value == 0 && sec.value == 0) return;
    startIntervel();
  });

  function startIntervel() {
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";
    countdownTimer = setInterval(() => {
      timer();
    }, 1000);
  }

  function timer() {
    if (hr.value == 0 && min.value == 0 && sec.value == 0) {
      hr.value = "";
      min.value = "";
      sec.value = "";
      stopInterver();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hr.value != 0 && min.value == 0) {
      min.value = 60;
      hr.value = `${hr.value <= 10 ? "0" : ""}${hr.value - 1}`;
    }
  }

  function stopInterver(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    clearInterval(countdownTimer);
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
  }

  stopBtn.addEventListener("click", function (){
    stopInterver("pause")
  })
  resetBtn.addEventListener("click", (e) => {
    hr.value = "";
    min.value = "";
    sec.value = "";

    stopInterver();
  });
})();
