// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import dynamic from "next/dynamic";
// import ResultCard from "@/src/components/ResultCard";
const ResultCard = dynamic(()=>import('@/src/components/ResultCard'),{
  loading:()=> <p>Loading...</p>
})
const Container = dynamic(() => import("@/src/components/common/Container"));
import { ResultList } from "@/src/utils/Constant/B2BMarketing";
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";

const Result = () => {
  const listOfBackgroundColor = [
    "linear-gradient(198deg, rgba(170, 203, 222, 0.40) 12.89%, rgba(170, 203, 222, 0.00) 88.15%)",
    "linear-gradient(198deg, rgba(255, 140, 0, 0.15) 12.89%, rgba(255, 140, 0, 0.00) 88.15%)",
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
            <LazyMotion features={domAnimation}>
              <m.p
                variants={subHeadingVarientForFistTime}
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorPrimary font-semibold leading-[150%] capitalize text-center"
              >
                <span className="text-themePrimary-topMedium">+ </span>B2B
                Marketing
              </m.p>
              <m.h2
                variants={headingVarientForFistTime}
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorSeconday uppercase text-center font-black text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
              >
                Results
              </m.h2>
            </LazyMotion>
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
