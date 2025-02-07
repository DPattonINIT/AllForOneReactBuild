import "./ReverseItNumber.css";
import { Link } from "react-router-dom";
import { getReversedNumber } from "../Services/ReverseItNumber";
import { useState } from "react";


const ReverseItNumberComponent = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("--");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setNum(e.target.value);
  };

  const reverseNumber = async () => {
    
    if (isNaN(num) || num.trim() === "") {
      setError("Please enter a valid number.");
      setResult("--"); 
    } else {
      setError("");
      try {
        const response = await getReversedNumber(num);
        setResult(response);
      } catch (error) {
        setResult("Oops! Something went wrong.");
      }
    }
  };

  return (
    <>
      <div className="reverseItNumberBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox2">
            <h2 className="helloBox2Text text-center">
              "Give me a number, and I will reverse it. This task is not merely
              for the mind, but for the spirit. A true warrior knows that
              strength lies not just in forward motion, but in the ability to
              turn, adapt, and see things from all angles.”
            </h2>
            <div className="userInputContainer">
              <input
                type="text"
                placeholder="Provide number"
                id="reverseNum"
                value={num}
                onChange={handleInputChange}
              />
            </div>
            <button className="submitBTN5" id="submitBTN5" onClick={reverseNumber}>
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 className="resultText6">
              {error && <p className="error-message text-red-700">{error}</p>}
                {result}
              </h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/ReverseItWord">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReverseItNumberComponent;