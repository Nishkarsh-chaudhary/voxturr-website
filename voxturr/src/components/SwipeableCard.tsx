// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FC, useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

// import WhiteCard from "@/src/components/WhiteCard";
const WhiteCard = dynamic(() => import("@/src/components/WhiteCard"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const Container = dynamic(() => import("@/src/components/common/Container"));
import { AppContext } from "@/src/utils/Route";
import {
  headingVarientForFistTime,
  subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { ISwipeableDataProps } from "@/src/utils/type";


interface ISwipeableCardProps {
  subHeading:JSX.Element;
  heading: JSX.Element;
  swipeableCardData: ISwipeableDataProps[];
}

const SwipeableCard: FC<ISwipeableCardProps> = ({
  subHeading,
  heading,
  swipeableCardData,
}) => {
  const { isMobile } = useContext(AppContext);

  return (
    <div className="relative saasMarketingCompany  overflow-hidden">
      <Container>
        <header className="mt-[90px] mb-[40px]">
          <main>
            <LazyMotion features={domAnimation}>
              <m.p
                variants={subHeadingVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorPrimary  font-semibold leading-[150%] capitalize flex gap-2"
              >
                <span className="text-themePrimary-topMedium pb-3 align-center text-[22px]">+ </span>{subHeading}
              </m.p>
              <m.div
                variants={headingVarientForFistTime}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-colorSeconday font-black text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4 mb-8 integralFontFamily"
              >
                {heading}
              </m.div>
            </LazyMotion>
          </main>
          <Swiper
            slidesPerView={!isMobile ? 3.3 : 1.1}
            spaceBetween={30}
            className="mySwiper dragableCursor"
          >
            {swipeableCardData.map((item) => {
              return (
                <SwiperSlide key={item.id} className="mt-16 mb-10">
                  <WhiteCard
                    icon={<item.icon />}
                    title={item.title}
                    description={item.description}
                    isHoverStyle
                    titleStyle="mt-4"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </header>
      </Container>
    </div>
  );
};

export default SwipeableCard;
