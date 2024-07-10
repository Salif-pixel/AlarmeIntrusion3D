

"use client";


import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


interface CardProps {
    title: string;
    description: string;
    image: string;
}



export function ThreeDCardDemo({title,description,image}: CardProps) {

    return (
        <CardContainer className="inter-var ">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-white bg-black border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <motion.img
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-96 w-fit object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

            </CardBody>
        </CardContainer>
    );
}
