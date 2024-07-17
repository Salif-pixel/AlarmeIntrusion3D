"use client";
import pir from "../../assets/poison.webp";
import capteur from "../../assets/halal.jpg";
import init from "../../assets/fruit.jpg";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards.tsx";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="  rounded-md flex flex-col antialiased  bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:init,
           title: ".. ",
    },
    {
        quote:capteur,
              title: "..",
    },
    {
        quote:pir,
            title: "..",
    },
];