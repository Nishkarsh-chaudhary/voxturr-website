"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/src/components/common/Container";
import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";

const TopRated = () => {
  return (
    <div className="w-full h-full object-contain px-2 py-[16rem] saasTopRatedBanner ">
      
        <motion.p
          variants={subHeadingVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-colorPrimary font-semibold leading-[150%] capitalize md:ml-[100px] md:pl-[100px] mt-[-87px] "
        >
          <span className="text-themePrimary-medium">+ </span>Top Rated
        </motion.p>
        <motion.h2
          variants={headingVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily uppercase md:w-[40%] md:ml-[100px] md:pl-[100px]"       >
          we would
          <span className="text-colorPrimary"> love </span>
          to <br /> hear from you
        </motion.h2>
        <motion.h5
          variants={descriptionVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-themePrimary-low text-xl leading-[150%] md:w-[40%] tracking-[-0.2px] md:ml-[100px] md:pl-[100px]"
        >
          Lorem ipsum dolor sit amet consectetur. Etiam at proin in integer
          volutpat venenatis. Faucibus adipiscing nulla imperdiet etiam.
          Placerat tempor faucibus lacus dignissim. Turpis aliquet porttitor
          ultricies commodo eu eu.
        </motion.h5>
        <Link href={"/Contact-Us"}>
        <motion.button
          variants={descriptionVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="uppercase text-white text-lg font-semibold border border-colorPrimary rounded-lg px-8 py-3 mt-12 hover:bg-colorPrimary hover:shadow-boxShadowSecondary md:ml-[200px]"
        >
          Contact us
        </motion.button>
        </Link>
      
    </div>
  );
};

export default TopRated;
