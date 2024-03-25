// "use client";
import { AnimatePresence, m,LazyMotion,domAnimation } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import {
  faqListVarient,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { faqListType } from "@/src/utils/type";

interface IFAQProps {
  title: string;
  description: string;
  faqList: faqListType[];
}

const FAQ: FC<IFAQProps> = ({ description, faqList, title }) => {
  const [activeFAQ, setActiveFAQ] = useState(1);

  const handleFAQToggle = (id: number) => {
    if (activeFAQ !== id) {
      setActiveFAQ(1);
      setTimeout(() => {
        setActiveFAQ(id);
      }, 100);
    } else {
      setActiveFAQ(id);
    }
  };

  return (
    <div className="px-2 pt-[92px] pb-[116px] faqSectionGrid">
      <Container>
        <div className="mb-20">
          <LazyMotion features={domAnimation}>
            <m.h2
              variants={headingVarientForFistTime}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily uppercase"
            >
              {title}
            </m.h2>
            {description && (
              <m.p
                variants={subHeadingVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorPrimary font-semibold text-center mt-4"
              >
                <span className="text-themePrimary-topMedium">+</span>{" "}
                {description}
              </m.p>
            )}
          </LazyMotion>
        </div>
        <AnimatePresence mode="wait">
          <ul className="md:px-[180px] flex flex-col items-center gap-0">
            {faqList.map((item) => {
              return (
                <LazyMotion features={domAnimation}>
                  <m.li
                    layout
                    key={item.id}
                    className={`px-8 py-6 md:w-[500px] lg:w-[1024px] ${
                      activeFAQ === item.id
                        ? "bg-white shadow-boxShodowPrimary rounded-2xl mb-5"
                        : "bg-transparent"
                    }`}
                  >
                    <m.div
                      layout
                      className="flex justify-between gap-2 cursor-pointer"
                      onClick={() => handleFAQToggle(item.id)}
                    >
                      <h4 className="text-colorSeconday text-xl font-semibold leading-[150%] w-[90%] items-start capitalize">
                        {item.question}
                      </h4>
                      <button className="text-2xl w-[10%] flex justify-end">
                        {activeFAQ === item.id ? "-" : "+"}
                      </button>
                    </m.div>
                    {activeFAQ === item.id && (
                      <m.p
                        layout
                        key="answer"
                        variants={faqListVarient}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="text-themePrimary-higher leading-[150%] w-[90%] font-medium mt-4 "
                      >
                        {item.answer}
                      </m.p>
                    )}
                  </m.li>
                </LazyMotion>
              );
            })}
          </ul>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default FAQ;
