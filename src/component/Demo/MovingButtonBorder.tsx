"use client";

import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {Function} props.animation - A function to be called on button click.
 */
export function MovingBorderDemo() {
    return (
        <motion.div  initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay:0.7,

        }}>

            <button  className="inline-flex h-12 mt-5 z-50 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
               C'est parti !
            </button>



        </motion.div>
    );
}
