
import './App.css'
import FirstPage from "./component/ui/FirstPage.tsx";
import {useState} from "react";
import {MultiStepLoaderDemo} from "./component/ui/MultiStepLoaderDemo.tsx";



function App() {
const [loading, setLoading] = useState(true);


  return (

    <div className={`bg-black h-screen w-screen`}>
        <FirstPage />
        {loading&&<MultiStepLoaderDemo loading={loading} setLoading={setLoading} />}

    </div>
  )
}

export default App
