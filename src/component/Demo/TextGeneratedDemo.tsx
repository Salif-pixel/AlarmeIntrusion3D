"use client";
import { TextGenerateEffect } from "./TextGenerated.tsx";

const words = `Plongez dans notre simulation 3D immersive d'alarme d'intrusion, où vous pouvez explorer en détail le fonctionnement et l'efficacité de systèmes de sécurité avancés, le tout dans un environnement interactif .
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
