import {motion} from "framer-motion";
import {StickyScrollRevealDemo} from "../../../component/Demo/StickyScrollRevealDemo.tsx";


export function Solution(){
    return (
        <motion.div initial={{opacity: 0,}} whileInView={{opacity: 1,}}
                    transition={{type: "spring", stiffness: 100, damping: 25}} className={`relative h-fit`}>
            <h1 className="text-3xl md:text-[3.5rem] font-mono  text-center font-semibold text-black mb-10 mt-4">
                Voici les <br/>
                <span
                    className="text-4xl md:text-[6rem] font-mono  text-center font-bold mt-1 text-blue-700 leading-none">
                                  solutions
                               </span>
            </h1>
            <StickyScrollRevealDemo/>
        </motion.div>

    );
}