

import Accueil from "./Component/Accueil.tsx";
import Probleme from "./Component/Probleme.tsx";
import { motion } from "framer-motion";
import {Solution} from "./Component/Solution.tsx";
import ThreeDAI from "./Component/3DAI.tsx";
import {MacbookScrollDemo} from "../../component/Demo/MacbookScrollDemo.tsx";

import {MultiStepLoaderDemo} from "../../component/Demo/MultiStepLoaderDemo.tsx";
import {useState} from "react";







function Landing() {
    const [loading, setLoading] = useState(true);

    return (
        <div className={`h-fit w-screen overflow-hidden`}>

            <Accueil/>
            <Probleme/>
            <Solution/>
            <motion.div
                        className={` w-screen h-screen relative bg-black z-50 pt-4`}>
                <motion.h1 initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}}
                           transition={{type: "spring", stiffness: 100, damping: 25}} className="text-3xl md:text-[3.5rem] font-mono  text-center font-semibold text-white mb-10 ">
                    L'intelligence <br/>
                    <span
                        className="text-4xl md:text-[5rem] font-mono  text-center font-bold mt-1 text-blue-700 leading-none">
                                 Artificielle
                               </span>
                </motion.h1>
                <ThreeDAI/>
            </motion.div>
            <MacbookScrollDemo/>



            {loading && <MultiStepLoaderDemo loading={loading} setLoading={setLoading}/>}

        </div>
    )
}

export default Landing


{/*<motion.div className={`z-50`} initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 0}}*/
}
{/*            transition={{type: "spring", stiffness: 100, damping: 25}}>*/
}

{/*    <motion.div initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}*/
}
{/*                transition={{type: "spring", stiffness: 100, damping: 25}}*/
}
{/*                className={` w-screen h-fit  relative  z-50 `}>*/
}
{/*        <h1 className="text-3xl md:text-[3.5rem] font-mono  text-center font-semibold text-black mb-10 mt-8">*/
}
{/*            Application <br/>*/
}
{/*            <span*/
}
{/*                className="text-4xl md:text-[6rem] font-mono  text-center font-bold mt-1 text-blue-700 leading-none">*/}
{/*                 mobile*/}
{/*               </span>*/}
{/*        </h1>*/}
{/*        <ThreeDPhone/>*/}
{/*        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: -300}}*/}
{/*                    transition={{type: "spring", stiffness: 100, damping: 25}}*/}
{/*                    className={`w-1/2 flex flex-row`}><AnimatedPinDemo title={"Playstore"} href={"https://play.google.com/store/apps?hl=fr"}/>*/}
{/*            <AnimatedPinDemo title={"Appstore"} href={"https://www.apple.com/fr/app-store/"}/></motion.div>*/}

{/*    </motion.div>*/}
{/*</motion.div>*/}