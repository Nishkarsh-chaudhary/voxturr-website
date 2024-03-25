// "use client";
import { motion } from "framer-motion";
import { FC } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
const GetInTouchForm = dynamic(() => import("@/src/components/GetInTouchForm"));
import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";


interface IGetInTouchProps {
  heading: JSX.Element;
  description: JSX.Element;
}

const GetInTouch: FC<IGetInTouchProps> = ({ heading, description }) => {
  return (
    <div className="bg-colorSeconday px-2 py-24 md:px-[84px] relative saasHeroBackground">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          <section className="md:w-1/2">
            <motion.p
              variants={subHeadingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorPrimary font-semibold leading-[150%] capitalize"
            >
              <span className="text-themePrimary-medium">+ </span>Contact Us
            </motion.p>
            <motion.div
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-white font-black uppercase text-[2.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
            >
              {heading}
            </motion.div>
            <motion.p
              variants={descriptionVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-themePrimary-low  interFontFamily"
            >
              {description}
            </motion.p>
          </section>
          <section className="w-full md:w-1/2 flex md:justify-end">
            <GetInTouchForm />
          </section>
          
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
