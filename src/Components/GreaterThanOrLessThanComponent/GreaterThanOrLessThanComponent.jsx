import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getComparison } from "../Services/GreaterThanOrLessThan";
import "./GreaterThanOrLessThan.css";

const GreaterThanOrLessThanComponent = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultText, setResultText] = useState("--");

  const getComparison = async (num1, num2) => {
    try {
      const response = await fetch(
        `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/GreaterThanOrLessThan/GetNumber/${num1}/${num2}`
      );

      if (!response.ok) {
        setResultText("Something went wrong!");
        return;
      }

      const data = await response.text();
      setResultText(data);
    } catch (error) {
      setResultText("Oops! Something went wrong.");
      console.error("Error:", error);
    }
  };

  const retrieveResults = () => {
    if (num1.trim() && num2.trim()) {
      getComparison(num1, num2);
    } else {
      setResultText("Please provide both numbers.");
    }
  };

  return (
    <>
      <div className="gtltBg fadeIn">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox3">
            <h2 className="helloBox2Text text-center">
              "A samurai must possess not only strength of body but clarity of
              mind. To understand the greater and lesser of numbers is to
              understand the balance of power in all things."
            </h2>
            <h1 className="helloBox2Text text-center">Give me 2 numbers</h1>
            <div className="userInputContainer flex flex-wrap justify-center place-items-center">
              <input
                type="text"
                placeholder="Provide number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Provide number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </div>
            <br />
            <button className="submitBTN5" onClick={retrieveResults}>
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 className="resultText4">{resultText}</h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center">
          <div className="nextButton">
            <Link to="/MadLib">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreaterThanOrLessThanComponent;
