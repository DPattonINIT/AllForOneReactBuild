import "./SayHello.css";
import { Link } from "react-router-dom";
import { getGreeting } from "../Services/SayHello";
import { useState } from "react";

const SayHelloComponent = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("--");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const retrieveResults = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(name)) {
      setGreeting(`Hello, ${name} it's nice to meet you!`);
    } else {
      setGreeting("Please enter a valid name (letters only).");
    }
  };

  return (
    <>
      <div className="sayHelloBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox">
            <h2 className="helloBoxText text-center">
              <br />
              <br />
              <br />
              First you must tell Yasuke your name.
            </h2>
            <br />
            <div>
              <input
                id="helloInput"
                className="userInput ml-10px"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button
              className="submitBTN"
              id="submitBTN"
              onClick={retrieveResults}
            >
              Submit
            </button>
            <br />
            <div className="userName">
              <h2
                id="userName"
                className="userNameText text-red-700 text-center"
              >
                {greeting}
              </h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center">
          <div className="nextButton">
            <Link to="/Welcome">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SayHelloComponent;
