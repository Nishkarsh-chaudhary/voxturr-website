"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/src/components/common/Container"));
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
  descriptionVarientForFistTime
} from "@/src/utils/animations/common";
import { ICommonIconDataPrps } from "@/src/utils/type";

interface ICommonIconEdtechDataPrps {
  heading: JSX.Element;
  commonIconCardData: ICommonIconDataPrps[];
  mainContainerClass?: string;
  description:string;
}

const CommonIconCard: FC<ICommonIconEdtechDataPrps> = ({
  heading,
  commonIconCardData,
  mainContainerClass,
  description,
}) => {
  return (
    <div
      className={`px-2 pt-[92px] pb-[116px] backgroundStartFromTopCenter backgroundPostionForMarketing ${mainContainerClass}`}
    >
      <main className="z-10">
        <Container>
          <main>
            <motion.p
              variants={subHeadingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorPrimary font-semibold leading-[150%] capitalize"
            >
              <span className="text-themePrimary-topMedium">+ </span>Product
              Marketing Redefined
            </motion.p>
            <motion.div
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorSeconday font-black text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
            >
              {heading}
            </motion.div>

            <motion.p
              variants={descriptionVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-themePrimary-high capitalize mb-10 text-[1.2rem] Inter text-left"
            >
              {description}
            </motion.p>
          </main>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-7 z-20">
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
                  className="p-8 md:max-w-[393px] md:h-[340px] border border-borderPrimary/70 rounded-3xl bg-white shadow-lg"
                >
                  <item.image />
                  <h4 className="text-colorSeconday text-xl font-bold leading-[150%] overflow-hidden mt-3 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-themePrimary-higher leading-[150%] max-h-[200px] overflow-auto hideScrollBar">
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
