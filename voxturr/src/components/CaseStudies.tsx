// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FC, useContext, useRef, useState } from "react";
import "swiper/css";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

const GlassCard = dynamic(() => import("@/src/components/GlassCard"));
const Container = dynamic(() => import("@/src/components/common/Container"));
import { ArrowSquare } from "@/src/utils/Image";
import { AppContext } from "@/src/utils/Route";
import {
  descriptionVarientForFistTime,
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { ICaseStudiesListProps } from "@/src/utils/type";

interface ICaseStudiesProps {
  mainTitle: JSX.Element;
  description: JSX.Element ;
  caseStudiesList: ICaseStudiesListProps[];
}

const CaseStudies: FC<ICaseStudiesProps> = ({
  mainTitle,
  description,
  caseStudiesList,
}) => {
  const { isMobile } = useContext(AppContext);
  const swiperRef = useRef<any>();
  const [activeLeftArrow, setActiveLeftArrow] = useState(false);
  const [activeRightArrow, setActiveRightArrow] = useState(true);
  const [activeCaseStudieCard, setActiveCaseStudieCard] = useState(1);
  const [activeHoverCaseStudieCard, setActiveHoverCaseStudiesCard] =
    useState(0);

  const handleVideoSlider = (type: string) => {
    const swiperValue = swiperRef.current.activeIndex;
    switch (type) {
      case "left":
        if (swiperRef?.current?.isBeginning === false) {
          setActiveCaseStudieCard(swiperValue);
          swiperRef?.current?.slidePrev();
          setActiveRightArrow(true);
        }
        if (swiperRef?.current?.activeIndex === 0) {
          setActiveLeftArrow(false);
        }
        break;
      case "right":
        if (swiperRef?.current?.isEnd === false) {
          setActiveCaseStudieCard(swiperValue + 2);
          setActiveLeftArrow(true);
          swiperRef?.current?.slideNext();
        }
        if (swiperRef?.current?.activeIndex === caseStudiesList.length - 1) {
          setActiveRightArrow(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-colorSeconday px-2 py-12 md:px-[84px] relative saasCaseStudiesBackground">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-2 !z-50">
          <section className="md:w-1/2 md:pr-0">
            <LazyMotion features={domAnimation}>
              <m.p
                variants={subHeadingVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorPrimary font-semibold leading-[150%] capitalize"
              >
                <span className="text-themePrimary-medium">+ </span>Values
              </m.p>
              <m.div
                variants={headingVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-white font-bold text-[1.5rem] md:text-[2.6rem] mobile:leading-[150%] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily uppercase"
              >
                {mainTitle}
              </m.div>
              <m.p
                variants={descriptionVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-themePrimary-low font-medium"
              >
                {description}
              </m.p>
            </LazyMotion>
            <div className="hidden md:flex items-center gap-6 mt-16 mb-[120px]">
              <ArrowSquare
                className={`${
                  activeLeftArrow
                    ? "stroke-colorPrimary cursor-pointer stroke-2 hover:fill-colorPrimary/10"
                    : "stroke-themePrimary-higher stroke-2"
                }`}
                onClick={() => handleVideoSlider("left")}
              />
              <ArrowSquare
                className={`${
                  activeRightArrow
                    ? "stroke-colorPrimary stroke-2 cursor-pointer hover:fill-colorPrimary/10"
                    : "stroke-themePrimary-higher stroke-2"
                } rotate-180`}
                onClick={() => handleVideoSlider("right")}
              />
            </div>
            <p className="text-themePrimary-low text-xl leading-[150%] font-semibold underline hover:text-colorPrimary cursor-pointer tracking-[-0.2px] mt-4 md:mt-0 w-fit ">
              View All Case Studies
            </p>
          </section>
          <section className="w-full md:w-1/2 dragableCursor">
            <Swiper
              slidesPerView={!isMobile ? 1.3 : 1}
              spaceBetween={30}
              className="mySwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              
              speed={600}
            >
              {caseStudiesList.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="mt-16 mb-10"
                    onMouseEnter={() => setActiveHoverCaseStudiesCard(item.id)}
                    onMouseLeave={() => setActiveHoverCaseStudiesCard(0)}
                  >
                    <GlassCard
                      image={
                        <item.image
                          className={`w-full h-[196px] ${
                            activeHoverCaseStudieCard === item.id
                              ? "scale-[1.0] md:scale-[1.25] duration-300"
                              : "scale-[1.0] md:scale-[1.25] duration-300"
                          }`}
                        />
                      }
                      title={item.title}
                      description={item.description}
                      tags={item.tags}
                      link={item.link}
                      borderStyle={
                        activeCaseStudieCard === item.id ? true : false
                      }
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudies;
