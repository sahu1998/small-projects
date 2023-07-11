import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useForm } from "react-hook-form";
import Dropdown from "../DropDown";

const GuessTheNumber = () => {
  const [difficultyNum, setDifficultyNum] = useState(10);
  const [difficultyName, setDifficultyName] = useState("Easy");
  const [lifeline, setLifeline] = useState(3);
  const [isFlipped, setIsFlipped] = useState(false);
  const [situation, setSituation] = useState("");
  const [isWon, setIsWon] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let buffer = [];
  for (let i = 0; i < lifeline; i++) {
    buffer.push(<i key={i} className="bi bi-heart-fill p-1 text-danger"></i>);
  }
  let loose = [];
  for (let i = lifeline; i < 3; i++) {
    loose.push(<i key={i} className="bi bi-heart p-1 text-danger"></i>);
  }
  const onSubmit = (values) => {
    let randomNum = parseInt(Math.random() * difficultyNum) + 1;
    if (values.number === randomNum) {
      setIsWon(true);
      setIsClicked(false);
      setIsFlipped(!isFlipped);
    } else if (lifeline === 1) {
      reset();
      setLifeline((pre) => pre - 1);

      // setLifeline(3);
      setSituation("");
      setIsWon(false);
      setIsClicked(false);
      setIsFlipped(!isFlipped);
    } else {
      setSituation("Oops! Try Again...");
      setLifeline((pre) => pre - 1);
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card">
        <div className="card-header h1 d-flex justify-content-between">
          <div className="bg-light rounded">
            {buffer.map((heart) => heart)}
            {loose.map((heart) => heart)}
          </div>
          <div>
            <Dropdown
              difficultyName={difficultyName}
              difficultyNum={difficultyNum}
              onSetDifficultyNum={setDifficultyNum}
              onSetDifficultyName={setDifficultyName}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              setLifeline={setLifeline}
            />
          </div>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="number"
              class="form-control"
              placeholder={`Enter Number from 1 to ${difficultyNum}`}
              aria-label="Number"
              {...register("number", {
                required: {
                  value: true,
                  message: "*Number is required",
                },
                min: {
                  value: 1,
                  message: "*Min value is 1",
                },
                max: {
                  value: difficultyNum,
                  message: `*Max value is ${difficultyNum}`,
                },
              })}
              error={!!errors?.number ? true : false}
            />
            <span className="text-danger ps-2">{errors?.number?.message}</span>
          </div>
          <div className="d-flex justify-content-between">
            <div className="flex-shrink-0">
              <img
                width={250}
                src={
                  "https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg"
                }
                alt="Think Smartly..."
              />
            </div>
            <div className="flex-grow-1 text-end check-btn">
              <span className="px-2 text-warning">{situation}</span>
              <button className="btn btn-primary my-5" type="submit">
                Check
              </button>
            </div>
          </div>
        </form>
        <div class="card-footer text-center text-bg-primary">
          <div className="h1">Guess The Number</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header h1 d-flex justify-content-between">
          <div className="bg-light rounded">
            {buffer.map((heart) => heart)}
            {loose.map((heart) => heart)}
          </div>
          <div className="text-secondary">
            {isWon ? "You Won" : "You Loose"}
          </div>
          <div>
            <Dropdown
              difficultyName={difficultyName}
              difficultyNum={difficultyNum}
              onSetDifficultyNum={setDifficultyNum}
              onSetDifficultyName={setDifficultyName}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          </div>
        </div>
        <div className="text-center">
          <img
            width={250}
            src={
              isWon
                ? "https://static8.depositphotos.com/1067257/874/v/450/depositphotos_8744393-stock-illustration-happy-guy-cheering.jpg"
                : "https://img.freepik.com/premium-vector/brain-is-crying-upset-depressive-sad-cartoon-brain-mental-health-cute-human-internal-organs-s_502320-574.jpg?w=2000"
            }
            alt={isWon ? "Smart" : "Bad Luck"}
          />
          <button
            className="btn btn-primary my-5"
            onClick={() => {
              setIsFlipped(!isFlipped);
              reset();
              setLifeline(3);
              setSituation("");
            }}
          >
            Play Again
          </button>
        </div>
        <div className="card-footer text-center text-bg-primary">
          <div className="h1">Guess The Number</div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default GuessTheNumber;
