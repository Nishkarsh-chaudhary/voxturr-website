"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState,useEffect } from "react";

import Container from "@/src/components/common/Container";
import StageCard from "@/src/screens/GrowthHacking/components/StageCard";
import OurclientCard from "./OurclientCard";
import StageControler from "@/src/screens/GrowthHacking/components/StageControler";
import {
  ExpansionStageObject,
  earlyStageObject,
  growthStageObject,
} from "@/src/utils/Constant/GrowthHacking";

import { FMCGbrandObject,HealthCareObject, RetailObject, TechnologyStageObject } from "@/src/utils/Constant/Home";

import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { stageHackingCardVarient } from "@/src/utils/animations/growthHacking";
import OurStageController from "./OurStageController";

const Ourclient = () => {
  const [activeStage, setActiveStage] = useState(1);

  const autoChangeStage = () => {
    const totalStages = 4; 
    setActiveStage((prevStage) => (prevStage % totalStages) + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(autoChangeStage, 5000);
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
            some of our clients
          </motion.h2>
          <motion.p
            variants={subHeadingVarientForFistTime}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorPrimary text-center font-semibold leading-[150%] capitalize mt-4 mb-16"
          >
            <span className="text-themePrimary-topMedium">+ </span>trusted by companies wolrdwide
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-2">
            <OurStageController
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
                <OurclientCard
                  stageData={
                    activeStage == 1
                      ? FMCGbrandObject
                      : activeStage === 2
                      ? HealthCareObject
                      :activeStage===3
                      ? RetailObject
                      : TechnologyStageObject
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

export default Ourclient;
