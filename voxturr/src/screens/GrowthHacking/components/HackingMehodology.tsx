"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState,useEffect } from "react";

import Container from "@/src/components/common/Container";
import StageCard from "@/src/screens/GrowthHacking/components/StageCard";
import StageControler from "@/src/screens/GrowthHacking/components/StageControler";
import {
  ExpansionStageObject,
  earlyStageObject,
  growthStageObject,
} from "@/src/utils/Constant/GrowthHacking";
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { stageHackingCardVarient } from "@/src/utils/animations/growthHacking";

const HackingMehodology = () => {
  const [activeStage, setActiveStage] = useState(1);

  const autoChangeStage = () => {
    const totalStages = 3; 
    setActiveStage((prevStage) => (prevStage % totalStages) + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(autoChangeStage, 8000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="px-2 pt-[92px] pb-[116px] backgroundStartFromTopCenter backgroundPostionForSuccessStories">
      <main className="z-10">
        <Container>
          <motion.h2
            variants={headingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
          >
            Our
            <span className="text-colorPrimary"> Growth </span>
            Hacking Methodology
          </motion.h2>
          <motion.p
            variants={subHeadingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorPrimary text-center font-semibold leading-[150%] capitalize mt-4 mb-16"
          >
            <span className="text-themePrimary-topMedium">+ </span>Lorem ipsum
            dolor sit
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-2">
            <StageControler
              activeStage={activeStage}
              setActiveStage={setActiveStage}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage ? activeStage : "empty"}
                variants={stageHackingCardVarient}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <StageCard
                  stageData={
                    activeStage == 1
                      ? earlyStageObject
                      : activeStage === 2
                      ? growthStageObject
                      : ExpansionStageObject
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HackingMehodology;
