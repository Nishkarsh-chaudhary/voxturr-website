// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import { successStoriesList } from "@/src/utils/Constant/GrowthHacking";
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import Image from "next/image";

const SuccessStories = () => {
  return (
    <div className="px-2 pt-[92px] pb-[116px] backgroundStartFromTopCenter backgroundPostionForSuccessStories">
      <main className="z-10">
        <Container>
          <LazyMotion features={domAnimation}>
            <m.h2
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
            >
              <span className="text-colorPrimary font-black font-[Inter]">
                200+{" "}
              </span>
              Success Stories and Counting
            </m.h2>
            <m.p
              variants={subHeadingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorPrimary text-center font-semibold leading-[150%] capitalize mt-4 mb-16"
            >
              <span className="text-themePrimary-topMedium">+ </span>trusted by
              companies worldwide
            </m.p>
          </LazyMotion>
          <div className="flex flex-col  items-center md:grid md:grid-cols-3 lg:grid-cols-4  z-20 lg:max-w-[850px] mx-auto gap-y-10 gap-x-[7rem] md:gap-y-20 md:pr-8 ">
            {successStoriesList.map((item) => {
              return (
                <div key={item.id}>
                  <Image src={item.icon} alt="icon" loading="lazy" />
                </div>
              );
            })}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default SuccessStories;
