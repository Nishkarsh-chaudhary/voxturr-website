"use client";
import { motion } from "framer-motion";
import { FC } from "react";

import { whiteCardHoverVarient } from "@/src/utils/animations/common";

interface IHomeglassCardProps {
  icon: JSX.Element;
  title: string|JSX.Element;
  description: string;
  isHoverStyle: true;
  
}

const HomeglassCard: FC<IHomeglassCardProps> = ({
  icon,
  title,
  description,
  isHoverStyle,
  
}) => {
  return (
    <motion.div
      whileHover={isHoverStyle ? whiteCardHoverVarient : ""}
      className="px-8 py-9 md:w-[394px] md:h-[253px] overflow-hidden rounded-3xl HomeglassEffectBackground relative  border border-solid border-orange-500 border-opacity-20"
    >
      <div className="flex justify-between">
      <h4
        className={`text-themePrimary-lower text-[22px] font-bold mt-2 mb-4 w-[70%]`}
      >
        {title}
      </h4>
      <div className="rounded-2xl border border-themePrimary-higher w-[40px] h-[40px] flex items-center justify-center">{icon}</div>
      
      </div>
  
      <p className="text-themePrimary-low text-[16px] leading-[150%] max-h-[220px] overflow-auto hideScrollBar text-base ">
        {description}
      </p>
    </motion.div>
  );
};

export default HomeglassCard;
