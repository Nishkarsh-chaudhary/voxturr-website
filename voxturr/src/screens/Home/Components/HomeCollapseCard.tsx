// components/CardsContainer.tsx
import React, { useState } from "react";
import { cardData } from "@/src/utils/Constant/Home";
import CollapseCard from "./CollapseCard";
import { motion } from "framer-motion";
import { headingVarientForFistTime, subHeadingVarientForFistTime } from "@/src/utils/animations/common";
import Container from "@/src/components/common/Container";
import { TestinomialArrow } from "@/src/utils/Image";

const HomeCollapseCard: React.FC = () => {
   const [openCardId, setOpenCardId] = useState<number | null>(1);

  const handleCardHoverStart = (id: number) => {
    setOpenCardId(id);
  };

  const handleCardHoverEnd = () => {
    if (cardData.length > 1) {
      setOpenCardId(1);
    }
  };

  return (
    <div className="md:h-[964px] homepageWorkingSection">
      <Container>
    <div className="flex flex-col flex-col gap-4 ">
      <section className="md:w-full  md:mt-[72px] md:flex justify-between ml-[25px]">
        <section>
        <motion.p
          variants={subHeadingVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-colorPrimary font-semibold leading-[150%] capitalize"
        >
          <span className="text-themePrimary-higher mobile:text-[2rem]">+ </span>Testimonials
        </motion.p>
        <motion.div
          variants={headingVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-colorSeconday font-semibold uppercase text-[2.5rem] md:text-[42px] tracking-[0.84px] leading-[125%] md:mt-4  integralFontFamily"
        >
          <h1>need <span className="text-colorPrimary">proof?</span></h1>
        </motion.div>
        </section>
        <section className="md:mr-10 mt-7 flex">
          <button className="text-themePrimary-higher interFontFamily text-[20px] font-bold leading-[140%] tracking-[0.4px] capitalize">see why marketers love voxturr </button>
          <div className="md:mt-4">
          <TestinomialArrow/>
          </div>
        </section>
      </section>
    <div className="flex flex-col md:flex-row gap-5 md:ml-[25px] md:mt-[64px] mobile:mb-10">
      {cardData.map((card) => (
        <CollapseCard
          key={card.id}
          title={card.title}
          backgroundImage={card.backgroundImage}
          isOpen={openCardId === card.id}
          onHoverStart={() => handleCardHoverStart(card.id)}
          onHoverEnd={handleCardHoverEnd}
        />
      ))}
      </div>
    </div>
    </Container>
    </div>
  );
};

export default HomeCollapseCard;
