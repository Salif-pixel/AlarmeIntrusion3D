import { motion } from "framer-motion";
import ThreeDIntro from "./ThreeDIntro.tsx";
import {TextGenerateEffectDemo} from "./TextGeneratedDemo.tsx";





function Intro() {


    return (
        <div className={` w-screen relative bg-black`}>

            <div className={`flex flex-col w-screen h-screen  justify-center items-start `}>
                <ThreeDIntro/>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.5,
                }}
                           className="text-4xl ml-10 md:text-7xl z-50 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Alarme d'intrusion.
                </motion.h1>
                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                     stiffness: 100,
                    damping: 25,
                }} className={`h-2 ml-10 bg-white z-50  rounded-lg mt-2`}></motion.div>
                <div className="mt-4 font-normal text-base z-50   text-neutral-300 max-w-lg ml-10">
                    <TextGenerateEffectDemo/>


                </div>
            </div>


        </div>
    )
}

export default Intro
