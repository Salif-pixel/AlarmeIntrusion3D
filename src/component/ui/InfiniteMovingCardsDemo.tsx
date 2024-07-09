"use client";


import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className=" rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
        quote:
            "La carte ESP32 a transformé notre projet de maison intelligente en une réalité. Grâce à ses capacités de connectivité et à sa puissance de traitement, nous avons pu intégrer facilement divers capteurs et automatiser de nombreuses tâches quotidiennes.",
        title: "carte ESP32",
    },
    {
        quote:
            "Le capteur PIR est incroyablement efficace pour détecter les mouvements dans notre système de sécurité. Il a une portée et une précision remarquables, nous alertant immédiatement de toute présence indésirable.",
        title: "capteur PIR",
    },
    {
        quote:
            "Le capteur de proximité infrarouge est un ajout fantastique à notre projet robotique. Il permet une détection précise des obstacles, ce qui est essentiel pour la navigation autonome de nos robots.",
        title: "capteur de proximité infrarouge",
    },
];