import {SparklesCore} from "../../../component/ui/sparkles.tsx";
import ThreedFruitstand from "./3DFruitStand.tsx";
import {SparklesPreview} from "../../../component/Demo/SparkleDemo.tsx";
import { motion } from "framer-motion";


function Accueil() {
// const [loading, setLoading] = useState(true);


    return (

<div id={`Accueil`} className={`bg-white h-screen overflow-hidden flex flex-col lg:flex-row w-screen`}>

    <SparklesPreview />
    <ThreedFruitstand/>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:"spring" ,stiffness:100,damping:25 ,delay:3}}  className={`absolute left-0 right-0 top-0 bottom-0 z-1 `}> <SparklesCore
        background="transparent"
        minSize={0.2}
        maxSize={1}
        particleDensity={90}
        className="w-full h-full z-1"
        particleColor="#0000FF"

    /> </motion.div>

</div>

    )
}

export default Accueil
