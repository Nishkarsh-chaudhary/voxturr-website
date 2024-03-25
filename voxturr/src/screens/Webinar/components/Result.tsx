"use client";
import { motion } from "framer-motion";

import ResultCard from "@/src/components/ResultCard";
import Container from "@/src/components/common/Container";
import { ResultList } from "@/src/utils/Constant/Webinar";
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";

const Result = () => {
  const listOfBackgroundColor = [
    "linear-gradient(198deg, rgba(170, 203, 222, 0.40) 12.89%, rgba(170, 203, 222, 0.00) 88.15%)",
    "linear-gradient(198deg, rgba(136, 170, 159, 0.30), rgba(136, 170, 159, 0.00) 88.15%)",
    "linear-gradient(198deg, rgba(68, 93, 181, 0.25) 12.89%, rgba(68, 93, 181, 0.00) 88.15%)",
  ];

  const getBackgroundColor = (id: number) => {
    return listOfBackgroundColor[id - 1];
  };

  return (
    <div className="relative webinarResultBackground overflow-hidden">
      <Container>
        <header className="my-[90px]">
          <main>
            <motion.p
              variants={subHeadingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorPrimary font-semibold leading-[150%] capitalize text-center"
            >
              <span className="text-themePrimary-topMedium">+ </span>Webinar
              Marketing
            </motion.p>
            <motion.h2
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorSeconday uppercase text-center font-black text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
            >
              Results
            </motion.h2>
          </main>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-7 max-w-[1100px] mx-auto mt-20">
            {ResultList.map((item) => {
              return (
                <ResultCard
                  key={item.id}
                  numberOfResult={item.totalResultCount}
                  title={item.title}
                  description={item.description}
                  backgrundColor={getBackgroundColor(item.id)}
                />
              );
            })}
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Result;
