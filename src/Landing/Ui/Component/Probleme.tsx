import {ContainerScroll} from "../../../component/ui/container-scroll-animation.tsx";
import {BentoGridDemo} from "../../../component/Demo/BentoGridDemo.tsx";
import {motion} from "framer-motion";


function Probleme() {
// const [loading, setLoading] = useState(true);


    return (


        <motion.div
                    className={`w-full  flex flex-col justify-center h-fit`}>
            <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 100, damping: 25}} className={` hidden lg:block `}>
                <ContainerScroll titleComponent={
                    <>
                        <h1 className="text-4xl md:text-[4rem] font-mono  text-center font-semibold text-black mb-10 mt-4">
                            Les differents problemes <br/>
                            <span
                                className="text-4xl md:text-[6rem] font-mono  text-center font-bold mt-1 text-blue-700 leading-none">
                                   a résoudre
                               </span>
                        </h1>
                    </>
                }>
                    <BentoGridDemo/>
                </ContainerScroll>
            </motion.div>
            <div className={` lg:hidden w-full flex flex-col z-50`}>
                <h1 className="text-3xl md:text-[3.5rem] font-mono  text-center font-semibold text-black mb-10 mt-4">
                    Les differents problemes <br/>
                    <span
                        className="text-4xl md:text-[6rem] font-mono  text-center font-bold mt-1 text-blue-700 leading-none">
                                   a resoudre
                               </span>
                </h1>
                <BentoGridDemo/>
            </div>
        </motion.div>
    )
}

export default Probleme