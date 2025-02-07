import "./ReverseItWord.css"
import { Link } from "react-router-dom"
import { getReversedWord } from "../Services/ReverseItWord"
import { useState } from "react"

const ReverseItWordComponent = () => {
    const [input, setInput] = useState(""); 
    const [result, setResult] = useState("--");  
    const [error, setError] = useState("");  
  
    const handleInputChange = (e) => {
      setInput(e.target.value);  
    };
  
    const reverseWord = async () => {
      const wordRegex = /^[A-Za-z]+$/;
  

      if (!wordRegex.test(input.trim())) {
        setError("Please enter a valid word (letters only).");
        setResult("--");  
      } else {
        setError("");  
        try {
          const response = await getReversedWord(input);  
          setResult(response);  
        } catch (error) {
          setResult("Oops! Something went wrong.");
        }
      }
    };
  
    return (
      <>
        <div className="ReverseItWordBg">
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
                "A warrior's strength is not only shown in his swordsmanship,
                but in his ability to reflect and adapt. Just as the blade can
                be sharpened, so too can the mind. Present me with a word, and I
                will reverse it."
              </h2>
              <div className="userInputContainer">
                <input
                  type="text"
                  placeholder="Provide word"
                  id="reverseWord"
                  value={input}
                  onChange={handleInputChange} 
                />
              </div>
              <button className="submitBTN5" id="submitBTN5" onClick={reverseWord}>
                Submit
              </button>
              <div className="resultContainer text-center text-red-700">
                <h2 className="resultText6" id="resultText6">
                  {result}
                  {error && <p className="error-message text-red-700">{error}</p>} 
                </h2>
              </div>
            </div>
          </div>
  
          <div className="nextButtonContainer flex justify-center">
            <div className="nextButton">
              <Link to="/Magic8Ball">
                <h3 className="nextText">Next</h3>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ReverseItWordComponent;