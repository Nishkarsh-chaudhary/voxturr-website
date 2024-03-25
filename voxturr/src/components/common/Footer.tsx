import React from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/common/Container";
import Image from "next/image";
import { Arrow2, ArrowIcon } from "@/src/utils/Image";

import { Border, Star2, Logo2 } from "@/src/utils/Image";
import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { once } from "events";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="bg-colorSeconday min-h[720px] relative  saasCaseStudiesBackground ">
      <Container>
        <Marquee className="md:overflow-hidden" speed={40} autoFill>
          <motion.div
            variants={headingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-themePrimary-lower font-bold text-[80px] mobile:text-[2rem]
          tracking-[0.3rem] 
          leading-[300%]  integralFontFamily flex flex-nowrap gap-3 "
          >
            <div className="text-[4.5rem] mobile:text-[1.5rem]  ml-8 ">
              <h1 className="">start a</h1>
            </div>
            <div>
              <h1 className="text-[4.5rem] mobile:text-[1.5rem] text-colorPrimary">
                project
              </h1>
            </div>
            <div className="flex justify-center items-center ml-2 md:mobile:stroke-[2.5rem] md:mt-6">
              <span className="">
                <Star2 />
              </span>
            </div>
          </motion.div>
        </Marquee>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 mobile:hidden "
        >
          <Border />
        </motion.div>

        <div className="h-1/2 w-full flex md:flex-row flex-col justify-around item-center gap-5 !z-50 ">
          <section className="md:w-full md:pr-0 grid gap-18 ">
            <motion.div
              variants={subHeadingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" leading-[150%] capitalize "
            >
                <Image
                  className="w-40 h-30 flex-shrink-0 "
                  src={Logo2}
                  alt="voxturr-logo"
                />
              
              <h2
                className="text-themePrimary-lower
                in mt-[40px] text-[20px] mobile:text-xl"
              >
                UI/UX DESIGN AGENGY FOR <br /> BETTER METRICS & ROIS.
              </h2>
              <div>
                <motion.button
                  variants={descriptionVarientForFistTime}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="uppercase text-white text-lg font-semibold border border-colorPrimary rounded-lg px-8 py-3 mt-12 hover:bg-colorPrimary flex gap-2 hover:shadow-boxShadowSecondary  mobile:mt-2"
                >
                  book a call
                  <Arrow2 className="stroke-themePrimary-lower stroke-2 mt-1" />
                </motion.button>
              </div>
            </motion.div>
          </section>
          <div className="text-themePrimary-lower capitalize ml-[10px] interFontFamily mobile:text-start mobile:gap-2 md:w-64 ">
            <h2 className="text-[20px]  mb-4">discover</h2>
            <ul className="text-themePrimary-high text-[16px] grid gap-4 mobile:text-[0.8rem] mt-[18px] uppercase">
              <li>
                <a href=""> about us</a>
              </li>
              <li>
                <a href="">work</a>
              </li>
              <li>
                <a href="">blog</a>
              </li>
              <li>
                <a href="">testimonials</a>
              </li>
              <li>
                <a href="">careers</a>
              </li>
              <li>
                <a href="">awards</a>
              </li>
            </ul>
          </div>
          <section
            className="text-themePrimary-lower capitalize
           ml-10  interFontFamily  w-1/2 mobile:ml-0 mobile:gap-2 "
          >
            <h2 className="text-[20px]  mb-4 ">services</h2>
            <ul
              className="text-themePrimary-high grid gap-4 mobile:text-[0.8rem] mt-[18px] uppercase
              "
            >
              <li>
                <a href="">web design</a>
              </li>
              <li>
                <a href="">mobile app design</a>
              </li>
              <li>
                <a href="">web3 design</a>
              </li>
              <li>
                <a href="">user experience</a>
              </li>
              <li>
                <a href="">seo</a>
              </li>
              <li>
                <a href="">webflow development</a>
              </li>
            </ul>
          </section>
          <section
            className="text-themePrimary-lower mr-0 w-full text-left"
          >
            <h2 className="text-themePrimary-high text-[20px] mb-4 md:ml-20 interFontFamily  mobile:text-xl mobile:mt-5">
              OR SEND US AN EMAIL AT
            </h2>

            <h2 className="text-[20px]  mb-5 interFontFamily mobile:text-xl md:ml-20 ">
              Contact@voxturr.Com
            </h2>

            <ul className="text-themePrimary-high grid gap-3 md:ml-20">
              <li>
                <h2 className="text-themePrimary-lower font-bold text-[20px] mb-3 capitalize">
                  USA
                </h2>
                <p className="text-themePrimary-high mb-5 text-[16px] tracking-tight mobile:text-[0.9rem]">
                  71 Stevenson St, San Francisco, CA 94105, United States
                </p>
              </li>

              <li className="text-themePrimary-lower  text-2xl mb-3 capitalize">
                <h2 className="text-themePrimary-lower font-bold text-[20px] mb-3 capitalize">
                  INDIA
                </h2>
                <p className="text-themePrimary-high mb-5 text-[16px] tracking-tight mobile:text-[0.9rem]">
                428, Tower B4, Spaze iTech Park, Sohna Road, Sector 49, Gurugram, Haryana – 122002
                </p>
              </li>
            </ul>
          </section>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 mb-8 mobile:hidden"
        >
          <Border />
        </motion.div>

        <div className=" md:w-full  !z-50 flex mobile:flex-col">
          <section className="md:w-full md:pl-0 mobile:w-full ">
            <p className="text-themePrimary-high mobile:mb-4 mobile:text-[0.7rem]">
              Copyright © 2023. All rights reserved.
            </p>
          </section>

          <section className="md:w-full flex justify-end mobile:justify-start">
            <div className="mr-0">
              <p className="text-themePrimary-high mobile:text-[0.7rem] ">
                PRIVACY POLICY
              </p>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
