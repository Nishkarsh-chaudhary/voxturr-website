"use client";
import { motion } from "framer-motion";
import { FC } from "react";

import { whiteCardHoverVarient } from "@/src/utils/animations/common";
import { HomeArrow } from "../utils/Image";

interface IHomePageCardProps {
  
  title: JSX.Element|string;
  description: string|JSX.Element;
  isHoverStyle: boolean;
  titleStyle?: string;
  data: string[];
}

const HomepageCard: FC<IHomePageCardProps> = ({
  title,
  description,
  isHoverStyle,
  data
}) => {
  return (
    <motion.div
      whileHover={isHoverStyle ? whiteCardHoverVarient : ""}
      className="px-8 py-9 md:w-[393px] md:h-[562px] overflow-hidden border border-borderPrimary/70 rounded-3xl glassEffectBackground relative shadow-xl "
    >
      <div className="flex justify-between">
      <h4
        className="text-colorSeconday uppercase text-[32px] font-bold mt-2 mb-4 w-[70%] integralFontFamily font-normal tracking-[0.64px] leading-[140%]"
      >
        {title}
      </h4>
      <HomeArrow/>
      </div>
      <p className="text-themePrimary-higher text-[16px] leading-[150%] max-h-[220px] overflow-auto hideScrollBar text-base mb-[28px] ">
        {description}
      </p>

      <p className="text-colorSeconday text-[20px] leading-[150%] max-h-[220px] font-semibold interFontFamily text-base flex flex-col capitalize  gap-[20px]">
        {Array.isArray(data)
          ? data.map((item, index) => <span key={index} className={`${
            index !== data.length - 1 ? 'border-b border-themePrimaryhigh pb-2' : ''
          }`}>{item}</span>)
          : data}
      </p>

    </motion.div>
  );
};

export default HomepageCard;
