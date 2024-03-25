"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import {
  faqListVarient,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { MarketingAutomationListType} from "@/src/utils/type";
import { ArrowCIrcleDown, ArrowCircleUp, AutomationBorder } from "../utils/Image";


interface IAccordianProps {
  title: JSX.Element;
  MarketingAutomationList: MarketingAutomationListType[];
}

const FAQ: FC<IAccordianProps> = ({ MarketingAutomationList, title }) => {
  const [activeFAQ, setActiveFAQ] = useState(1);

  const handleFAQToggle = (id: number) => {
    if (activeFAQ !== id) {
      setActiveFAQ(1);
      setTimeout(() => {
        setActiveFAQ(id);
      }, 100);
    } else {
      
      if(id > activeFAQ){
        setActiveFAQ(id);
      }  
    }
  };


  return (
    <div className="px-2 pt-[92px] pb-[116px] faqSectionGrid">
      <Container>
        <div className="mb-20">
          <motion.h2
            variants={headingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily uppercase"
          >
            {title}
          </motion.h2>
    
        </div>
        <AnimatePresence mode="wait" >
          <ul className="md:px-[180px] flex flex-col  items-center md:-ml-[8rem]  md:grid md:grid-cols-3 gap-[10rem] gap-y-5 ">
            {MarketingAutomationList.map((item) => {
              return (
                <motion.li
                  layout
                  key={item.id}
                  className={`px-8 py-6 md:w-[393px] lg:w-[350px] bg-white rounded-xl ${
                    activeFAQ === item.id
                      ? "bg-white shadow-boxShodowPrimary rounded-2xl mb-5 "
                      : "bg-transparent "
                  }`}
                  style={{
                    background: item.backgroundColor, boxShadow:item.boxshadow, 
                    border:item.border,
                  }}
                >
                  <motion.div
                    layout
                    className="flex justify-between  cursor-pointer w-[300px] "
                    onClick={() => handleFAQToggle(item.id)}
                  >
                    <h4 className="text-[40px]   font-bold">{item.count}</h4>
                    <h4 className="text-colorSeconday text-[18px] font-bold leading-[140%]  items-start pt-2  ">
                      {item.question}
                    </h4>
                    <span>
                      {activeFAQ === item.id ? <ArrowCircleUp/> : <ArrowCIrcleDown/>}
                    </span>
                  </motion.div>
                  <div className="mt-5">
                  {activeFAQ === item.id && <AutomationBorder />}
                  </div>
                  {activeFAQ === item.id && (
                    <motion.p
                      layout
                      key="answer"
                      variants={faqListVarient}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="text-themePrimary-higher text-[16px] leading-[160%] font-medium mt-4 capitalize "
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default FAQ;
