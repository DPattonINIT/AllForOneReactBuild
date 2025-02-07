import { useState } from "react";
import { Link } from "react-router-dom";
import { getOddorEven } from "../Services/OddOrEven";
import "./OddorEven.css";

const OddOrEvenComponent = () => {
  const [number, setNumber] = useState("");  
  const [result, setResult] = useState("--");  

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const retrieveResults = async () => {
    if (number.trim()) {
      try {
        const response = await getOddorEven(number);  
        setResult(response);  
      } catch (error) {
        setResult("Oops! Something went wrong.");
      }
    } else {
      setResult("Please enter a number.");
    }
  };

  return (
    <>
      <div className="OddorEvenBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>
        <div className="helloContainer">
          <div className="helloBox2">
            <br/> <br/> <br/>
            <h2 className="helloBox2Text text-center">
              "Present a number to me, and I shall tell you if it is odd or even. This may seem a simple task, but even in such small details, a warrior finds wisdom.”
            </h2>
            <div className="userInputContainer">
              <input
                type="text"
                placeholder="Provide number"
                id="oENum"
                value={number}  
                onChange={handleNumberChange}  
              />
            </div>
            <button className="submitBTN4" id="submitBTN4" onClick={retrieveResults}>
              Submit
            </button>
            <br/>
            <div className="resultContainer text-center text-red-700">
              <h2 className="resultText3" id="resultText3">
                {result}
              </h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/GreaterThanOrLessThan">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OddOrEvenComponent;
