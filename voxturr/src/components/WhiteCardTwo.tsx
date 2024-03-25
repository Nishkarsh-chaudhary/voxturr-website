"use client";
import { motion } from "framer-motion";
import { FC } from "react";

import { whiteCardHoverVarient } from "@/src/utils/animations/common";

interface IWhiteCardTwoProps {
  icon: JSX.Element;
  title: string|JSX.Element;
  description: string;
  isHoverStyle: boolean;
  titleStyle?: string;
}

const WhiteCardTwo: FC<IWhiteCardTwoProps> = ({
  icon,
  title,
  description,
  isHoverStyle,
  titleStyle,
}) => {
  return (
    <motion.div
      whileHover={isHoverStyle ? whiteCardHoverVarient : ""}
      className="px-8 py-9 md:w-[360px] md:h-[436px] overflow-hidden saas-trailoredSolutionCardWithoutBlur"
    >
      {icon}
      <h4
        className={`text-colorSeconday text-[24px] font-bold mt-2 mb-4 w-full  ${
          titleStyle ? titleStyle : ""
        }`}
      >
          {title}
      </h4>
      <p className="text-themePrimary-higher md:leading-[160%] max-h-[240px] overflow-auto hideScrollBar text-base  text-[16px]">
        {description}
      </p>
    </motion.div>
  );
};

export default WhiteCardTwo;
