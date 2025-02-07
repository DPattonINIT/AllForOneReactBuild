import "./MadLib.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchStory } from "../Services/MadLibService"; 

const MadLibComponent = () => {
  const [nouns, setNouns] = useState(["", "", "", "", ""]);
  const [adjectives, setAdjectives] = useState(["", "", "", "", ""]);
  const [storyResult, setStoryResult] = useState("--");

  
  const handleInputChange = (e, index, type) => {
    const newArr = type === "noun" ? [...nouns] : [...adjectives];
    newArr[index] = e.target.value;
    if (type === "noun") {
      setNouns(newArr);
    } else {
      setAdjectives(newArr);
    }
  };

  const retrieveResults = async () => {
    if (nouns.every((noun) => noun) && adjectives.every((adj) => adj)) {
      const story = await fetchStory(nouns, adjectives);
      setStoryResult(story);
    } else {
      setStoryResult("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="madLibBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox3">
            <h2 className="helloBox3Text text-center">
              "A samurai must understand the world through both simplicity and
              precision. To do so, one must know the essence of things—the nouns
              that define them—and the qualities that distinguish them—the
              adjectives that bring them to life."
            </h2>
            <h1 className="helloBox2Text text-center">Enter Below</h1>
            <div className="grid grid-cols-2">
              
              {nouns.map((noun, index) => (
                <input
                  key={`noun${index}`}
                  type="text"
                  placeholder={`Provide noun ${index + 1}`}
                  value={noun}
                  onChange={(e) => handleInputChange(e, index, "noun")}
                />
              ))}
              {adjectives.map((adj, index) => (
                <input
                  key={`adjective${index}`}
                  type="text"
                  placeholder={`Provide adjective ${index + 1}`}
                  value={adj}
                  onChange={(e) => handleInputChange(e, index, "adjective")}
                />
              ))}
            </div>
            <button className="submitBTN5" id="submitBTN5" onClick={retrieveResults}>
              Submit
            </button>
            <h2
              id="resultsText5"
              className="resultsText5 text-red-700 text-center"
            >
              {storyResult}
            </h2>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/ReverseItNumber">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MadLibComponent;
