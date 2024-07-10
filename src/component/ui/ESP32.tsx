
import Spline from "@splinetool/react-spline";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {ThreeDCardDemo} from "./3d-cardDemo.tsx";
import notify from "../../assets/notify.png";
import init from "../../assets/init.png";


export default function ESP32() {


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
                    ESP32/Blynk notify.
                </motion.h1>

                <motion.div initial={{width: 10}} whileInView={{width: 100}} transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                }} className={`h-2 ml-10 bg-white z-40  rounded-lg mt-10`}></motion.div>
                <div className="mt-4 font-normal text-base z-50   text-neutral-300 max-w-lg ml-10">
                    grace a l'esp 32 qui se connecte via un wifi il pourra envoyer des notifications via blynk


                </div>

            </div>
            <div className={`flex  w-screen  justify-center items-center `}>
                <div className={`grid  w-screen   grid-cols-1  lg:grid-cols-2  `}>
                <ThreeDCardDemo title={`Logique code de l'esp32`}
                                description={` ici on va juste mettre des valeur pour le SSID et le mot de passe de notre wifi permettant au capteur de se connecter au wifi`}
                                image={init}/>
                <ThreeDCardDemo title={`Logique code pour notifier avec blynk`}
                                description={` Ici on suit juste la valeur du capteur infrarouge a l'aide de la variable isTheftAlert si elle est egale a 0 il m'envoie une notification avec blynk.logEvent au prealable on doit mettre au dessus du code le template et le token de notre projet blynk  `}
                                image={notify}/>
                </div>
            </div>
            {loading && <Spline className={`hidden md:block`} scene="https://prod.spline.design/YRlF36K-ZYn7ST2n/scene.splinecode"/>


            }

        </div>

    )
}
