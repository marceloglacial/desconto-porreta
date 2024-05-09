'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=' relative inline-block'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='text-xs text-right whitespace-nowrap absolute bg-black text-white px-2 py-1 rounded-md top-[100%] right-0 mt-1'
            >
                {text}
            </motion.div>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
            </div>
        </div>
    );
};
