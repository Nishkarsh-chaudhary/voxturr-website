"use client";
import { motion } from "framer-motion";
import { FC } from "react";

import { whiteCardHoverVarient } from "@/src/utils/animations/common";

interface IWhiteCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  isHoverStyle: boolean;
  titleStyle?: string;
}

const WhiteCard: FC<IWhiteCardProps> = ({
  icon,
  title,
  description,
  isHoverStyle,
  titleStyle,
}) => {
  return (
    <motion.div
      whileHover={isHoverStyle ? whiteCardHoverVarient : ""}
      className="px-8 py-9 md:w-[342px] md:h-[408px] overflow-hidden saas-trailoredSolutionCardWithoutBlur"
    >
      {icon}
      <h4
        className={`text-colorSeconday text-[22px] font-bold mt-2 mb-4 w-[70%] ${
          titleStyle ? titleStyle : ""
        }`}
      >
        {title}
      </h4>
      <p className="text-themePrimary-higher text-[16px] leading-[150%] max-h-[220px] overflow-auto hideScrollBar text-base ">
        {description}
      </p>
    </motion.div>
  );
};

export default WhiteCard;
