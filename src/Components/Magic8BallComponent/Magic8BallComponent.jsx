import "./Magic8Ball.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMagic8BallResponse } from "../Services/Magic8BallService";

const Magic8BallComponent = () => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("--");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const retrieveResults = async () => {
    if (question.trim()) {
      const response = await getMagic8BallResponse(question);
      setResult(response);
    } else {
      setResult("Please ask a question.");
    }
  };

  return (
    <>
      <div className="Magic8BallBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="helloContainer">
          <div className="helloBox5">
            <h2 className="helloBox2Text text-center">
              "A true warrior understands that wisdom comes not in haste, but in
              patience. The question must be clear, the mind focused. Ask with
              purpose, and trust that the answer will come in its own time."
            </h2>
            <h1 className="helloBox2Text text-center">
              Ask me a Question Below
            </h1>
            <div className="userInputContainer">
              <input
                type="text"
                placeholder="Provide question"
                id="userQuestion"
                value={question}
                onChange={handleQuestionChange}
              />
            </div>
            <button
              className="submitBTN5"
              id="submitBTN5"
              onClick={retrieveResults}
            >
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 id="resultText6">{result}</h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/RestaurantPicker">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magic8BallComponent;
