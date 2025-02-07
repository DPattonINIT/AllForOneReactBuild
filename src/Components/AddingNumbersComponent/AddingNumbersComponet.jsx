import { Link } from "react-router-dom";
import "./AddingNumbers.css";
import { AddNumbers } from "../Services/AddingNumbersService";
import { useState } from "react";

const AddingNumbersComponent = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");

  const retrieveResults = async () => {
    if (
      firstNum.trim() &&
      secondNum.trim() &&
      !isNaN(firstNum) &&
      !isNaN(secondNum)
    ) {
      try {
        const resultText = await AddNumbers(firstNum, secondNum);
        setResult(resultText);
      } catch (error) {
        console.error("Error:", error);
        setResult("Oops! Something went wrong.");
      }
    } else {
      setResult("Please enter valid numbers!");
    }
  };
  return (
    <>
      <div className="addingNumbersBg slideDown">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="AddNumBoxContainer">
          <div className="AddNumBox">
            <h2 className="AddNumBoxText text-center">
              "A samurai must not only be sharp with his sword, but also with
              his mind.”
            </h2>
            <h2 className="AddNumBoxText1 text-center">Give me two numbers.</h2>
            <div className="userInputContainer flex flex-wrap justify-center">
              <input
                type="text"
                placeholder=""
                value={firstNum}
                onChange={(e) => setFirstNum(e.target.value)}
              />
              <input
                type="text"
                placeholder=""
                value={secondNum}
                onChange={(e) => setSecondNum(e.target.value)}
              />
            </div>
            <br />
            <button className="submitBTN2" onClick={retrieveResults}>
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 className="resultText" id="resultText">
                {result}
              </h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/AskingQuestions">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddingNumbersComponent;
