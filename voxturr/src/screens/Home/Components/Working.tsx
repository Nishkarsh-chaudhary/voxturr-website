// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import { ShowAll } from "@/src/utils/Image";
import { headingVarientForFistTime } from "@/src/utils/animations/common";
import HomepageCard from "@/src/components/HomepageCards";


interface IWorkingCardProps {
  heading: JSX.Element;
  workingCardData:{
    id: number;
    title: string | JSX.Element; 
    description: string|JSX.Element;
    data: string[];
  }[];
}

const Working: FC<IWorkingCardProps> = ({
  heading,
  workingCardData,
}) => {
  return (
    <div className="md:h-[932px] mobile:mb-10 homepageWorkingSection ">
      <Container>
        <LazyMotion features={domAnimation}>
          <m.div
            variants={headingVarientForFistTime}
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday text-center font-bold text-[2.5rem] md:text-[136px] tracking-[2.72px] leading-[140%] md:-mb-10 mobile:mt-8 mobile:mb-5 integralFontFamily "
          >
            {heading}
          </m.div>
        </LazyMotion>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full mx-auto">
          {workingCardData.map((item) => {
              return (
                <HomepageCard  
                  key={item.id}
                  title={<>{item.title}</>}
                  description={item.description}
                  isHoverStyle
                  data = {item.data}
                />
              );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Working;
