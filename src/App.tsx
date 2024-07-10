import { motion } from 'framer-motion';
import './App.css'
import FirstPage from "./component/ui/FirstPage.tsx";



function App() {



  return (
    <div className={`bg-black h-screen w-screen`}>

        <FirstPage />
        <motion.div initial={{opacity:1}} animate={{opacity:0,display:"none"}} transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 10,
        }} id={`overlay`} className={`fixed left-0 top-0 right-0 bottom-0 overflow-hidden  text-2xl text-center text-white  bg-black z-[999]`}>
            chargement...
        </motion.div>


    </div>
  )
}

export default App
