import React, { useRef, useState } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState({
    hour: "",
    min: "",
    sec: "",
  });
  const startBtnRef = useRef();
  const stopBtnRef = useRef();
  const countdownTimer = useRef();
  const createCountdown = (e) => {
    let { value, name, maxLength } = e.target;
    if (value.length <= 2) {
      e.target.value = value.slice(0, maxLength);
      setTimer((prev) => ({ ...prev, [name]: value }));
    }
  };

  const countdown = (timer) => {
    let { hour, min, sec } = timer;
    if(sec >= 60){
        min = 1 + +min;
        sec = sec - 60;
    }
    if(min >= 60){
        hour = 1+ +hour;
        min = min - 60
    }
    countdownTimer.current = setInterval(() => {
      if (hour == 0 && min == 0 && sec == 0) {
        hour = min = sec = "";
        stopTimer();
      } else if (sec != 0) {
        sec = `${sec <= 10 ? "0" : ""}${sec - 1}`;
      } else if (min != 0 && sec == 0) {
        min = `${min <= 10 ? "0" : ""}${min - 1}`;
        sec = 59;
      } else if (hour != 0 && min == 0) {
        hour = `${hour <= 10 ? "0" : ""}${hour - 1}`;
        min = 60;
      }
      setTimer((prev) => ({ hour, min, sec }));
    }, 1000);
  };
  const startTimer = (e) => {
    const { hour, min, sec } = timer;
    if (hour == 0 && min == 0 && sec == 0) {
      return;
    }
    startBtnRef.current.style.display = "none";
    stopBtnRef.current.style.display = "initial";
    countdown(timer);
  };
  const stopTimer = (state) => {
    startBtnRef.current.innerText = state === "pause" ? "Continue" : "Start";
    startBtnRef.current.style.display = "initial";
    stopBtnRef.current.style.display = "none";
    clearInterval(countdownTimer.current);
  };

  const resetTimer = () => {
    setTimer((prev) => ({ hour: "", min: "", sec: "" }));
    stopTimer();
  };
  return (
    <div className="countdown_container">
      <div className="countdown_header">Countdown Timer</div>
      <div className="countdown_labels">
        <p className="countdown_labels--label">Hour</p>
        <p className="countdown_labels--label">Minute</p>
        <p className="countdown_labels--label">Second</p>
      </div>
      <div className="countdown_inputs">
        <input
          type="number"
          placeholder="00"
          onInput={createCountdown}
          value={timer.hour}
          name="hour"
          maxLength={2}
          className="hour"
        />
        <p>:</p>
        <input
          type="number"
          placeholder="00"
          maxLength={2}
          value={timer.min}
          onInput={createCountdown}
          name="min"
          className="minute"
        />
        <p>:</p>
        <input
          type="number"
          placeholder="00"
          maxLength={2}
          onInput={createCountdown}
          value={timer.sec}
          name="sec"
          className="second"
        />
      </div>
      <div className="countdown_btns">
        <button className="btn start" ref={startBtnRef} onClick={startTimer}>
          Start
        </button>
        <button
          className="btn stop"
          ref={stopBtnRef}
          onClick={(e) => {
            stopTimer("pause");
          }}
        >
          Stop
        </button>
        <button className="btn reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
