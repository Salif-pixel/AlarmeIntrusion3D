
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import poison from "../../assets/poison.webp";
import halal from "../../assets/halal.jpg";
import vitamine from "../../assets/fruit.jpg";
import allergenes from "../../assets/allergenes.jpg";
import drogue from "../../assets/drogue.webp";
import venin from "../../assets/venin.jpg";
export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto z-50 mb-10">

            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}

// const Skeleton = () => (
//     <div className="flex z-50 flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
    {
        title: "Les poisons",
        description: "...",
        header: <img className={` z-50 rounded-lg`} src={poison} alt={"poison"}/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Les nourritures halal",
        description: "...",
        header: <img className={` z-50 rounded-lg`} src={halal} alt={"halal"}/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "L'apport nutritionnel",
        description: "... ",
        header: <img className={` z-50 rounded-lg`} src={vitamine} alt={"vitamine"}/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "La drogue",
        description:
            "...",
        header: <img className={`w-full h-full min-h-[6rem] z-50 rounded-lg`} src={drogue} alt={"drogue"}/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "les venins",
        description: "...",
        header: <img className={` w-full h-full min-h-[6rem] z-50 rounded-lg`} src={venin} alt={"venin"}/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Les allergènes",
        description: "...",
        header: <img className={`  z-50 rounded-lg`} src={allergenes} alt={"allergenes"}/>,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },

];
