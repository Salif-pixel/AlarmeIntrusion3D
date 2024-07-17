import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function ThreedFruitstand() {
    return (
        <motion.div className={`w-full hidden md:block`} initial={{x:200,scale:2,opacity:0}} whileInView={{scale:1.1,opacity:1,x:0}} transition={{type:"spring" ,stiffness:100,damping:25 }}>
            <Spline  scene="https://prod.spline.design/BRysQknAxwrudRvP/scene.splinecode" />
        </motion.div>



    );
}
