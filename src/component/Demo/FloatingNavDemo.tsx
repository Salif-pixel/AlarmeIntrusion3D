"use client";

import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage } from "@tabler/icons-react";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Accueil",
            link: "Accueil",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },

        {
            name: "Contact",
            link: "Contact",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
