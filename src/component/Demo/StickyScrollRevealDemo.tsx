"use client";
import { motion } from "framer-motion";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
    {
        title: "Application mobile de gestion de sécurité alimentaire",
        description:
            "Découvrez notre application mobile innovante pour la gestion de la sécurité alimentaire. Suivez et gérez les stocks, surveillez la qualité des produits et recevez des alertes en temps réel sur les risques potentiels. Assurez-vous que les aliments respectent les normes de sécurité les plus strictes, tout en gardant une vue d'ensemble sur les opérations.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
                Application mobile
            </div>
        ),
    },
    {
        title: "Intelligence artificielle pour la vérification des aliments",
        description:
            "Notre solution d'IA avancée analyse les composants des aliments pour garantir leur sécurité. Grâce à des algorithmes de pointe, nous pouvons détecter les contaminants, évaluer les valeurs nutritionnelles et assurer la conformité aux normes de sécurité alimentaire. Protégez les consommateurs et maintenez la qualité des produits avec notre technologie innovante.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
                Intelligence artificielle
            </div>
        ),
    },
    {
        title: "Interface web de gestion d'admin",
        description:
            "Facilitez la gestion de la sécurité alimentaire avec notre interface web dédiée aux administrateurs. Supervisez les opérations, gérez les utilisateurs, et accédez à des rapports détaillés sur la qualité et la sécurité des aliments. Notre plateforme vous offre tous les outils nécessaires pour maintenir une chaîne d'approvisionnement sûre et efficace.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                Interface web
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:"spring" ,stiffness:100,damping:25 }}  className=" h-screen">
            <StickyScroll content={content} />
        </motion.div>
    );
}
