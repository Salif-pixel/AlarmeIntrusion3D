"use client";
import { motion } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";
interface AnimatedPinDemoProps {
    title: string;
    href: string;
}

export function AnimatedPinDemo({title,href}: AnimatedPinDemoProps) {
    return (
        <motion.div initial={{scale:0.8}} className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title={title}
                href={href}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                {href}
            </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-white to-blue-500" />
                </div>
            </PinContainer>
        </motion.div>
    );
}
