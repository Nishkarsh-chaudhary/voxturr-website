"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import { ArrowIcon } from "../utils/Image";
import { whiteCardHoverVarient } from "@/src/utils/animations/common";

interface IHomePageCardProps {
  image: JSX.Element;
  title: JSX.Element|string;
  description: string|JSX.Element;
  tags:string[];
  isHoverStyle: boolean;
  titleStyle?: string;

}

const HomeCaseStudyCard: FC<IHomePageCardProps> = ({
  image,  
  title,
  description,
  tags,
  isHoverStyle,
 
}) => {
  return (
    <motion.div
      whileHover={isHoverStyle ? whiteCardHoverVarient : ""}
      className="px-8 py-9 md:w-[605px] md:h-[660px] overflow-hidden border border-borderPrimary/70 rounded-3xl glassEffectBackground relative shadow-xl "
    > 
        {image}
      <h4
        className="text-colorSeconday uppercase text-[24px] font-bold mt-2 mb-2 w-[70%] integralFontFamily font-normal  leading-[150%]"
      >
        {title}
      </h4>
      <p className="text-themePrimary-higher text-[16px] leading-[150%] font-medium capitalize overflow-auto hideScrollBar  ">
        {description}
      </p>

      <div className="flex items-center gap-3 flex-wrap mt-3 mb-4">
        {tags.map((tagItem, i) => {
          return (
            <h4
              key={i}
              className="px-2 py-1 bg-themePrimary-high rounded-md text-colorSeconday/90 font-semibold leading-[150%]"
            >
              {tagItem}
            </h4>
          );
        })}
      </div>
      <button className="flex items-center gap-2 px-4 py-3 border border-borderPrimary rounded-lg text-lg font-semibold text-colorSeconday hover:bg-colorPrimary hover:shadow-boxShadowSecondary hover:border-colorPrimary cursor-pointer">
        <span>View Project</span>
        <ArrowIcon className="stroke-colorPrimary stroke-2" />
      </button>
    </motion.div>
  );
};

export default HomeCaseStudyCard;
