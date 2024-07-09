import Spline from "@splinetool/react-spline";
import {motion} from "framer-motion";




export default function SimulationCapteurInfrarouge() {


    return (
        <div className={`bg-black`}>
            <div className={`flex flex-col w-screen mt-10 justify-center items-start `}>

                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.5,
                }}
                           className="text-4xl ml-10 md:text-7xl z-50 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    capteur infrarouge.
                </motion.h1>
                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`h-2 ml-10 bg-white z-40  rounded-lg mt-2`}></motion.div>
                <div className="mt-4 font-normal text-xl z-50   text-neutral-300 max-w-lg ml-10">
                    <p>appuyer sur le premier lazer vert pour entre un bip lorsqu'on coupe la transmission
                        on envoie un bip sonore pour alerter les gens dans la maison.</p>


                </div>
            </div>
            <Spline scene="https://prod.spline.design/BF-tNDZaucW6BsI2/scene.splinecode"/>


        </div>
    )
}