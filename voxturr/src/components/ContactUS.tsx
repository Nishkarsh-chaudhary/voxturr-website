"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";


const Container = dynamic(() => import("@/src/components/common/Container"));
const GetInTouchForm = dynamic(() => import("@/src/components/GetInTouchForm"));
import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";

import { Map,ContactBoarder } from "../utils/Image";


interface IGetInTouchProps {
  heading: JSX.Element;
  description: JSX.Element;
}

const GetInTouch: FC<IGetInTouchProps> = ({ heading, description }) => {
  return (
    <div className="bg-colorSeconday px-2 py-24 md:px-[84px] relative saasHeroBackground">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          <section className="md:w-1/2 flex flex-col">
            <section>
            <motion.div>
                <Image
                src={Map}
                alt="map"/>

            </motion.div>
            </section>
            <section className=" md:grid-cols-2 md:flex ">
            <div className="w-full">
            <motion.div
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-white leading-trim  font-inter font-bold text-[28px] capitalize interFontFamily mt-[40px] mobile:leading-[125%]"
            >
              {heading}
            </motion.div>
            <motion.p
              variants={descriptionVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-themePrimary-low  interFontFamily text-[20px] w-[16rem]"
            >
              {description}
            </motion.p>
            </div>
            <div className="w-full">
                <div className="glassEffectBackground rounded-[24px] mt-[40px] h-[316px] px-6 py-8">
                    <h4 className="text-white text-[28px] interFontFamily font-bold capitalize md:mb-4">Contact Us!</h4>
                    <ContactBoarder/>
                    <h5 className="text-[18px] text-themePrimary-high mt-5">Email</h5>
                    <p className="text-themePrimary-lower text-[20px]">contact@voxturr.com</p>

                    <h5 className="text-[18px] text-themePrimary-high mt-[24px]">Phone</h5>
                    <p className="text-themePrimary-lower text-[20px] mt-[8px]">+1 (415) 513 0045</p>
                </div>
               
            </div>
            
            </section>  
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
