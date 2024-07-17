
import './App.css'


import Landing from "./Landing/Ui/main.tsx";
import {FloatingNavDemo} from "./component/Demo/FloatingNavDemo.tsx";
import {GlobeDemo} from "./component/Demo/GlobeDemo.tsx";
import {BackgroundBeamsDemo} from "./component/Demo/BackgroundBeamsDemo.tsx";




function App() {



  return (

    <div className={`bg-white w-screen overflow-x-hidden`}>
        <FloatingNavDemo/>
        <Landing/>
        <GlobeDemo/>
        <BackgroundBeamsDemo/>



    </div>

  )
}

export default App
