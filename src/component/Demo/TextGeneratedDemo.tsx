"use client";
import { TextGenerateEffect } from "../ui/TextGenerated.tsx";

const words = `Commencez dès aujourd'hui et transformez la gestion de la sécurité alimentaire. 
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
