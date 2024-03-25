// "use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const WhiteCardTwo = dynamic(() => import("@/src/components/WhiteCardTwo"), {
  loading: () => <p>Loading...</p>,
});

const Container = dynamic(() => import("@/src/components/common/Container"));
import { ShowAll } from "@/src/utils/Image";
import { headingVarientForFistTime } from "@/src/utils/animations/common";
import { IDifferentIconDataProps } from "@/src/utils/type";

interface IDifferenetIconCardProps {
  heading: JSX.Element;
  differentIconData:{
    id: number;
    image: any;
    title: string | JSX.Element; // Update this line
    description: string;
    titleWidth: string;
  }[];
}

const DifferentIconCard: FC<IDifferenetIconCardProps> = ({
  heading,
  differentIconData,
}) => {
  const [isViewMore, setIsViewMore] = useState(9);
  return (
    <div
      className={`px-2 md:px-[100px] pt-[91px] pb-[116px] saasMarketingSolution ${
        isViewMore > 9
          ? "backgroundStartFromTopCenter differentIconCardBackgroundPosition"
          : ""
      }`}
    >
      <Container>
        <LazyMotion features={domAnimation}>
          <m.div
            variants={headingVarientForFistTime}
            whileInView="show"
            viewport={{ once: true }}
            className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mb-20 integralFontFamily "
          >
            {heading}
          </m.div>
        </LazyMotion>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full mx-auto">
          {differentIconData.map((item) => {
            if (item.id <= isViewMore) {
              return (
                <WhiteCardTwo
                  
                  key={item.id}
                  icon={
                    <div className="bg-gradient-to-b from-white to-colorPrimary/30 w-[62px] h-[62px] rounded-full flex justify-center items-center">
                      <item.image className="fill-colorPrimary" />
                    </div>
                  }
                  title={<>{item.title}</>}
                  description={item.description}
                  titleStyle={item.titleWidth}
                  isHoverStyle
                />
              );
            }
          })}
        </div>
        {isViewMore <= 9 && differentIconData.length > 9 && (
          <div className="flex justify-end">
            <p
              className="text-lg text-colorSeconday font-semibold cursor-pointer mt-8 md:mr-[80px] w-40 border-2 p-2 border-colorSeconday hover:border-colorPrimary hover:text-colorPrimary rounded-lg flex justify-center gap-1"
              onClick={() => setIsViewMore(differentIconData.length)}
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

export default DifferentIconCard;
