import "./AskingQuestions.css";
import { Link } from "react-router-dom";
import { AskingQuestions } from "../Services/AskingQuestionsService";
import { useState } from "react";

const AskingQuestionsComponent = () => {
  const [name, setName] = useState("");
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [resultText, setResultText] = useState("");

  const retrieveResults = async () => {
    if (name.trim() && wakeUpTime.trim()) {
      try {
        const data = await AskingQuestions(name, wakeUpTime);
        setResultText(data);
      } catch (error) {
        setResultText("Oops! Something went wrong.");
      }
    } else {
      setResultText("Please enter both your name and wake-up time!");
    }
  };
  return (
    <>
      <div className="askingQuestionsBg slideDown">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox2">
            <h2 className="helloBox1Text text-center">
              "A true samurai knows that it is not only strength and skill that
              define him, but wisdom. And wisdom comes not only from knowledge,
              but from knowing the right questions to ask. In every battle, in
              every moment, it is the questions that guide you toward clarity."
            </h2>
            <h2 className="helloBoxText2 text-center">
              Answer these questions.
            </h2>
            <div className="userInputContainer flex flex-wrap justify-center place-items-center">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="What time did you awake"
                value={wakeUpTime}
                onChange={(e) => setWakeUpTime(e.target.value)}
              />
            </div>
            <button className="submitBTN3" onClick={retrieveResults}>
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 className="resultText"> {resultText}</h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/OddorEven">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AskingQuestionsComponent;
