import React from 'react'
import { Link } from 'react-router-dom'
import "./Welcome.css"

export const WelcomeComponent = () => {
  return (
<>
<div className="welcomeBg">
<div className="mainMenuContainer">
        <div className="mainMenuBTN">
            <Link to="/">
                <h3 class="mainMenuText text-center">Main Menu</h3>
            </Link>
        </div>
</div>

<div className="helloContainer">
    <div className="helloBox1">

        <h2 className="helloBox1Text text-center">"I welcome you, honorable warrior, to this path of trials. I am Yasuke, once a servant, now a samurai. The road ahead will test your spirit, your strength, and your honor. Only those who walk with courage, wisdom, and loyalty will earn the right to be called samurai. Stand ready, for the journey begins now."</h2>
    </div>
</div>

<div className="nextButtonContainer flex justify-center ">
        <div className="nextButton">
            <Link to="/AddingNumbers">
                <h3 class="nextText">Next</h3>
            </Link>
        </div>
    </div>

    </div>


</>

    
  )
}
export default WelcomeComponent
