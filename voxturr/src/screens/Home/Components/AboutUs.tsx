"use client";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import CountUp from "react-countup";



const Container = dynamic(() => import("@/src/components/common/Container"));

import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
} from "@/src/utils/animations/common";


interface IGetInTouchProps {
  heading: JSX.Element;
  description: JSX.Element;
}

const AboutUs: FC<IGetInTouchProps> = ({ heading, description }) => {

  return (
  
    <div className="bg-colorSeconday px-2 py-24 md:px-[84px] relative saasHeroBackground">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          <section className="md:w-1/2">
            <motion.div
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-white font-black uppercase text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
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

            <Link href={"/Contact-Us"}>
        <motion.button
          variants={descriptionVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="uppercase text-white text-lg font-semibold border border-colorPrimary rounded-lg px-8 py-3 mt-12 hover:bg-colorPrimary hover:shadow-boxShadowSecondary "
        >
          Contact us
        </motion.button>
        </Link>
          </section>
          <section className=" md:w-1/2 md:flex felx-col items-start justify-end md:mr-10">
         <div className="text-colorPrimary interFontFamily text-[52px] font-bold leading-[150%] capitalize grid gap-5">
            <motion.h1 className="">
                <CountUp start={0} end={10} duration={3} delay={0}/>+ 
                <p className="text-themePrimary-lower text-[16px] font-medium leading-[150%]">team specialists</p>
            </motion.h1>
            <motion.h1>
                <CountUp start={0} end={100} duration={3} delay={0}/>+
                <p className="text-themePrimary-lower text-[16px] font-medium leading-[150%] ">created projects</p>
            </motion.h1>
            <motion.h1>
                <CountUp start={0} end={1} duration={3} delay={0}/>M+
                <p className="text-themePrimary-lower text-[16px] font-medium leading-[150%]">creative ideas</p>
            </motion.h1>
            
         </div>
         </section>
         
        </div>
      </Container>
    </div>

  );
};

export default AboutUs;
