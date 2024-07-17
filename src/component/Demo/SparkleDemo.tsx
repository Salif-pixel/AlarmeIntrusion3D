"use client";

import { motion } from "framer-motion";





export function     SparklesPreview() {
    return (
        <motion.div  initial={{x:-250,opacity:0}} animate={{x:0,opacity:1}} transition={{type:"spring" ,stiffness:100,damping:25 ,delay:2}} className=" z-50 md:w-1/2 w-full h-screen bg-transparent flex flex-col items-center md:items-start justify-center  rounded-md">
            <motion.div initial={{x: -250, opacity: 0}} whileInView={{x: 10, opacity: 1}}
                        transition={{type: "spring", stiffness: 100, damping: 25}}>
                <div className={`flex md:flex-row font-mono flex-col md:justify-evenly`}>
                    <h1 className="md:text-7xl mr-2  text-5xl  font-bold text-center text-black relative z-50">
                        Sécurité
                    </h1>
                    <span
                        className="md:text-7xl  text-5xl  font-bold text-center text-blue-600 relative z-50"> Alimentaire</span>
                </div>

                <div className="w-[40rem] relative">

                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                    <div
                        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                    <div
                        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4"/>


                </div>
                < div className={`text-black text-md md:text-2xl text-center w-full font-bold font-mono mt-4`}>Commencez dès aujourd'hui <br/> et transformez la gestion de la sécurité <br/>alimentaire.
                </div>


                <div className={`md:w-fit flex flex-col md:flex-row mt-4 z-50  `}>
                    <button
                        className="inline-flex h-12   ml-64 mr-60 mb-4 md:mb-0 md:ml-0 md:mr-4   animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Se connecter
                    </button>
                    <button
                        className="  ml-64 mr-60 md:ml-0 md:mr-0  shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                       S'inscrire
                    </button>

                </div>

            </motion.div>
            {/*<div className={`absolute bottom-0`}><InfiniteMovingCardsDemo/></div>*/}

        </motion.div>
    );
}