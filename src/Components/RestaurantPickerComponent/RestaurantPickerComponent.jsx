import "./RestaurantPicker.css";
import { Link } from "react-router-dom";
import { getRestaurant } from "../Services/RestaurantPicker";
import { useState } from "react";

const RestaurantPickerComponent = () => {
  const [category, setCategory] = useState("");
  const [result, setResult] = useState("--");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const retrieveResults = async () => {
    if (category.trim()) {
      try {
        const response = await getRestaurant(category);
        setResult(`I recommend ${response}`);
      } catch (error) {
        setResult("Oops! Something went wrong.");
      }
    } else {
      setResult("Please enter a category.");
    }
  };

  return (
    <>
      <div className="restaurantPickerBg">
        <div className="mainMenuContainer">
          <div className="mainMenuBTN">
            <Link to="/">
              <h3 className="mainMenuText text-center">Main Menu</h3>
            </Link>
          </div>
        </div>

        <div className="helloContainer">
          <div className="helloBox6">
            <h2 className="helloBox6Text text-center">
              "Before you embark on a meal, you must first choose your path—just
              as a warrior chooses his strategy before battle. Choose a
              category, and I shall guide you to the right place. A warrior
              learns that in all things, from combat to nourishment, balance and
              choice are key."
            </h2>
            <h1 className="categoryTxt">
              Choose a Category: 1.fastfood 2.japanese 3.chinese 4.italian
              5.mexican
            </h1>
            <div className="userInputContainer">
              <input
                type="text"
                placeholder="Provide category"
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
            <button className="submitBTN5" onClick={retrieveResults}>
              Submit
            </button>
            <div className="resultContainer text-center text-red-700">
              <h2 id="resultText6">{result}</h2>
            </div>
          </div>
        </div>

        <div className="nextButtonContainer flex justify-center ">
          <div className="nextButton">
            <Link to="/Ending">
              <h3 className="nextText">Next</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantPickerComponent;
