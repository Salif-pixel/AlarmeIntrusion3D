
import Spline from "@splinetool/react-spline";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";



export default function Prison() {


    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.addEventListener('load', handleLoad);
            return () => {
                canvas.removeEventListener('load', handleLoad);
            };
        }
    }, []);
    return (
        <div id={`second`} className={`bg-black text-white w-screen`}>
            <div className={`flex flex-col w-screen  justify-center items-start `}>

                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.5,
                }}
                           className="text-4xl ml-10 md:text-7xl z-50 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Prison.
                </motion.h1>

                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`h-2 ml-10 bg-white z-40  rounded-lg mt-10`}></motion.div>
                <div className="mt-4 font-normal text-base z-50   text-neutral-300 max-w-lg ml-10">
                    le proprietaire ayant recu une notification en plus de l'alarme a pu appeler la police a temps


                </div>

            </div>
            {loading &&     <Spline scene="https://prod.spline.design/cGXSlkgzmdheT6kr/scene.splinecode" />



            }

        </div>

    )
}
