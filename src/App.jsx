import { Link } from 'react-router-dom'
import './App.css'


function App() {

  return (
 <>
 <div className='NewBg'>
 <div className="titleContainer  flex justify-center flex-wrap">
        <div className="titleBox">
            <h1 className="titleText text-white">All For One</h1>
        </div>
    </div>

    <div className="enterContainer">
        <div className="enterBTN">
            <Link to="/MainMenu"> <h2 class="enterText">Enter</h2></Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
