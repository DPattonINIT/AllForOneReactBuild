import React from 'react'
import"./Ending.css"
import { Link } from 'react-router-dom'


export const EndingComponent = () => {
  return (
    
    <div className="EndingBg">
    
  

    <div className="helloContainer">
    <div className="helloBox">
        <h2 class="helloBox7Text text-center">"Congratulations. You have faced the challenges with strength and resolve. The path you have walked shows that you possess the heart of a true warrior. Now, your training begins. A samurai's journey is never complete, for we are always refining ourselves, both in body and spirit. I will teach you the ways of discipline, respect, and honor—tools that will make you not just a warrior, but a protector of what is right. Prepare yourself, for the true test is only just beginning."</h2>
        
        <div class="mainMenuContainer">
            <div class="mainMenuBTN">
                <Link to="/">
                    <h3 class="mainMenuText text-center">Main Menu</h3>
                </Link>
            </div>
        </div>
    </div>
</div>
</div>

  )
}
export default EndingComponent