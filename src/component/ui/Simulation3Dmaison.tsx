import Spline from "@splinetool/react-spline";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";


export default function Simulation3Dmaison() {


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
        <div id={`second`} className={`bg-black text-white  w-screen`}>
            <div className={`flex flex-col w-screen  justify-center items-start `}>

                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                    delay: 0.5,
                }}
                           className="text-4xl ml-10 md:text-7xl z-50 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Simulation 3D d'une maison équipée.
                </motion.h1>
                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`h-2 ml-10 bg-white z-40  rounded-lg mt-10`}></motion.div>

            </div>
            {loading && <Spline className={`hidden md:block`}
                                scene="https://prod.spline.design/FTYW4kiWalgqjtsT/scene.splinecode" />
            }
            <div className="mt-4 font-normal text-xl z-50 md:hidden  text-neutral-300 max-w-lg ml-10">
                <p>Attention pour avoir la simulation utiliser un ecran plus large</p>


            </div>
        </div>

    )
}
