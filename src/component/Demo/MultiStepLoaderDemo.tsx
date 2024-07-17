"use client";

import { MultiStepLoader as Loader } from "../ui/multi-step-loader.tsx";


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
interface MultiStepLoaderDemoProps {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export function MultiStepLoaderDemo({loading,setLoading}: MultiStepLoaderDemoProps) {

    return (
        <div className="w-full h-[60vh] flex items-center justify-center">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates}  loading={loading} setLoading={setLoading} duration={1000} />

            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}



        </div>
    );
}
