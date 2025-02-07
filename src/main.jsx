import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SayHelloComponent from './Components/SayHelloComponent/SayHelloComponent.jsx'
import GreaterThanOrLessThanComponent from './Components/GreaterThanOrLessThanComponent/GreaterThanOrLessThanComponent.jsx'
import MadLibComponent from './Components/MadLibComponent/MadLibComponent.jsx'
import Magic8BallComponent from './Components/Magic8BallComponent/Magic8BallComponent.jsx'
import OddOrEvenComponent from './Components/OddorEvenComponent/OddOrEvenComponent.jsx'
import RestaurantPickerComponet from './Components/RestaurantPickerComponent/RestaurantPickerComponent.jsx'
import ReverseItNumberComponent from './Components/ReverseItNumberComponent/ReverseItNumber.jsx'
import ReverseItWordComponent from './Components/ReverseItWordComponent/ReverseitWordComponent.jsx'
import AddingNumbersComponent from './Components/AddingNumbersComponent/AddingNumbersComponet.jsx'
import AskingQuestionsComponent from './Components/AskingQuestionsComponent/AskingQuestionsComponent.jsx'
import WelcomeComponent from './Components/WelcomeComponent/WelcomeComponent.jsx'
import EndingComponent from './Components/EndingComponent/EndingComponent.jsx'
import MainMenuComponent from './Components/MainMenuComponent/MainMenuComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>} />
     <Route path='/MainMenu' element={<MainMenuComponent/>} />
     <Route path='/AddingNumbers' element={<AddingNumbersComponent/>} />
     <Route path='/Welcome' element={<WelcomeComponent/>} />
     <Route path='/AskingQuestions' element={<AskingQuestionsComponent/>} />
     <Route path='/GreaterThanOrLessThan' element={<GreaterThanOrLessThanComponent/>} />
     <Route path='/MadLib' element={<MadLibComponent/>} />
     <Route path='/Magic8Ball' element={<Magic8BallComponent/>} />
     <Route path='/OddOrEven' element={<OddOrEvenComponent/>} />
     <Route path='/RestaurantPicker' element={<RestaurantPickerComponet/>} />
     <Route path='/ReverseItNumber' element={<ReverseItNumberComponent/>} />
     <Route path='/ReverseItWord' element={<ReverseItWordComponent/>} />
     <Route path='/SayHello' element={<SayHelloComponent/>} />
     <Route path='/Ending' element={<EndingComponent/>} />

     </Routes>
    </BrowserRouter>
  </StrictMode>
)
