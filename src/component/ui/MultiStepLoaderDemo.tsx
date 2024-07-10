"use client";

import { MultiStepLoader as Loader } from "../ui/multi-step-loader";


const loadingStates = [
    {
        text: "Chargement premiere page",
    },
    {
        text: "Chargement model button 3D",
    },
    {
        text: "Chargement interface des capteurs",
    },
    {
        text: "Chargement model capteur infrarouge "
    },
    {
        text: "Chargement model capteur PIR",
    },
    {
        text: "Chargement maison 3D ",
    },
    {
        text: "C'est bientot fini",
    },
    {
        text: "Bienvenue ",
    },
];

export function MultiStepLoaderDemo({loading,setLoading}) {

    return (
        <div className="w-full h-[60vh] flex items-center justify-center">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} setLoading={setLoading} loading={loading} duration={6000} />

            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}



        </div>
    );
}
