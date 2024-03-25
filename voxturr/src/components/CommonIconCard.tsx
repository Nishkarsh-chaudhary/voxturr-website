"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import { headingVarientForFistTime } from "@/src/utils/animations/common";
import { ICommonIconDataPrps } from "@/src/utils/type";

interface ICommonIconCardProps {
  heading: JSX.Element;
  commonIconCardData: ICommonIconDataPrps[];
  mainContainerClass?: string;
}

const CommonIconCard: FC<ICommonIconCardProps> = ({
  heading,
  commonIconCardData,
  mainContainerClass,
}) => {
  return (
    <div
      className={`px-2 pt-[92px] pb-[116px] backgroundStartFromTopCenter backgroundPostionForMarketing ${mainContainerClass}`}
    >
      <main className="z-10">
        <Container>
          <motion.div
            variants={headingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday uppercase text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mb-20 integralFontFamily"
          >
            {heading}
          </motion.div>
          <div className="md:flex flex-coloumn md:grid md:grid-cols-3 md:gap-7 z-20">
            {commonIconCardData.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.9,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  }}
                  className="p-8 md:max-w-[393px] md:h-[340px] border border-borderPrimary/70 rounded-3xl bg-white shadow-lg  "
                >
                  
                    <item.image />
                    <h4 className="text-colorSeconday text-xl font-bold leading-[150%] overflow-hidden mt-3 mb-3">
                      {item.title}
                    </h4>
                  
                  <p className="text-themePrimary-higher leading-[150%] max-h-[200px] overflow-auto hideScrollBar  text-[16px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CommonIconCard;
