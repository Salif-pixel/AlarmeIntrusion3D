"use client";

import { BackgroundBeams } from "../ui/background-beams";

export function BackgroundBeamsDemo() {
    return (
        <div id={`Contact`} className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Contactez nous
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Pour toute question ou demande d'information, n'hésitez pas à nous contacter. Notre équipe est disponible pour vous aider et répondre à vos besoins. Vous pouvez nous joindre par email à [votre adresse email] ou via notre formulaire de contact sur notre site web. Nous nous engageons à vous fournir une assistance rapide et efficace pour garantir votre satisfaction.
                </p>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />

            </div>
            <BackgroundBeams />
        </div>
    );
}
