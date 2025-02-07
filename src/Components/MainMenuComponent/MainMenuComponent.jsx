import { Link } from 'react-router-dom'
import './MainMenu.css'


function MainMenuComponent() {

  return (
    <>
      <div className="LandingBg">
        <br/>
        <br/>
        <br/>

      <div className="selectionContainer flex flex-wrap">
        <div className="selectionBox">
            <Link to="/SayHello">
                <h3 className="selectionText text-center">SayHello</h3>
            </Link>
</div>

        <div className="selectionBox flex flex-wrap">
            <Link to="/AddingNumbers">
                <h3 className="selectionText text-center">Add 2 Numbers</h3>
            </Link>
        </div>
    </div>
  <br/>
    <div className="selectionContainer">
        <div className="selectionBox">
          <Link to="/AskingQuestions"> <h3 className="selectionText text-center">Asking Questions</h3></Link>
        </div>

        <div className="selectionBox">
          <Link to="/OddOrEven"> <h3 className="selectionText text-center">Odd or Even</h3></Link>
        </div>
    </div>
  <br/>
    <div className="selectionContainer">
        <div className="selectionBox">
           <Link to="/GreaterThanOrLessThan"> <h3 class="selectionText text-center">Greater Than or Less Than</h3></Link>
        </div>

        <div class="selectionBox">
           <Link to="/MadLib"> <h3 class="selectionText text-center">MadLib</h3></Link>
        </div>
    </div>
    <br/>
    <div className="selectionContainerx2  sm: flex-wrap">
        <div className="selectionBox">
           <Link to="/ReverseItNumber"> <h3 class="selectionText text-center">Reverse it Number</h3></Link>
        </div>

        <div className="selectionBox">
           <Link to="/ReverseItWord"> <h3 class="selectionText text-center">Reverse it Word</h3></Link>
        </div>
        <div className="selectionBox">
          <Link to="/Magic8Ball">  <h3 class="selectionText text-center">Magic 8 Ball</h3></Link>
        </div>

        <div className="selectionBox">
           <Link to="/RestaurantPicker"> <h3 class="selectionText text-center">Restaurant Picker</h3></Link>
        </div>
    </div>

    <div className="introContainer">
        <div className="introBox">
            <p className="introText text-center">Your a young warrior aspiring to become a samurai. Yasuke, the legendary
                Samurai, has agreed to train you. Only by completing 10 challenges will they prove your worth and be
                granted the honor of becoming a true samurai.</p>
        </div>

        <div className="storyContainer">
            <div class="storyBTN">
                <Link to="/AddingNumbers">
                    <h3 className="selectionText text-center">Enter</h3>
                </Link>
            </div>
        </div>
    </div>




      </div>


    </>
  )
}

export default MainMenuComponent