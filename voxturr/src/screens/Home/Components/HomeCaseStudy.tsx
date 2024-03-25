// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/src/components/common/Container"));
import { headingVarientForFistTime } from "@/src/utils/animations/common";
import HomeCaseStudyCard from "@/src/components/HomeCaseStudyCard";
import { ShowAll } from "@/src/utils/Image";


interface IWorkingCardProps {
  heading: JSX.Element;
  workingCardData:{
    image: any;
    id: number;
    title: string | JSX.Element; 
    description: string|JSX.Element;
    tags:string[];
  }[];
}

const HomeCaseStudy: FC<IWorkingCardProps> = ({
  heading,
  workingCardData,
}) => {

    const [isViewMore , setIsViewMore] = useState(6);
  return (
    <div className={` -mt-10 pb-[116px] backgroundStartFromTopCenter backgroundPostionForSuccessStories ${
        isViewMore > 6
          ? "backgroundStartFromTopCenter differentIconCardBackgroundPosition"
          : ""
      }`}>
      <Container>
        <LazyMotion features={domAnimation}>
          <m.div
            variants={headingVarientForFistTime}
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday text-center font-bold text-[2.5rem] md:text-[136px] tracking-[2.72px] leading-[140%] md:-mb-10 mobile:mb-5 integralFontFamily "
          >
            {heading}
          </m.div>
        </LazyMotion>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 w-full mx-auto">
          {workingCardData.map((item) => {
            if(item.id<= isViewMore)
              return (
                <HomeCaseStudyCard  
                image={ <item.image/> }
                  key={item.id}
                  title={<>{item.title}</>}
                  description={item.description}
                  tags={item.tags}
                  isHoverStyle
                />
              );
          })}
        </div>
        {isViewMore <= 6 && workingCardData.length > 6 && (
          <div className="flex justify-end">
            <p
              className="text-lg text-colorSeconday font-semibold cursor-pointer mt-8 md:mr-[80px] w-40 border-2 p-2 border-colorSeconday hover:border-colorPrimary hover:text-colorPrimary rounded-lg flex justify-center gap-1"
              onClick={() => setIsViewMore(workingCardData.length)}
            >
              <ShowAll className="stroke-colorPrimary stroke-2" />
              View All
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomeCaseStudy;
