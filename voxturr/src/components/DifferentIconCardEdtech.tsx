// "use client";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import dynamic from "next/dynamic";

const WhiteCard = dynamic(() => import("@/src/components/WhiteCard"), {
  loading: () => <p>Loading...</p>,
});
const Container = dynamic(() => import("@/src/components/common/Container"));
import { ShowAll } from "@/src/utils/Image";
import { headingVarientForFistTime ,descriptionVarientForFistTime } from "@/src/utils/animations/common";
import { IDifferentIconDataProps } from "@/src/utils/type";


interface IDifferentIconEdtechDataProps {
  heading: JSX.Element;
  description: string;
  differentIconData: IDifferentIconDataProps[];
}

const DifferentIconCard: FC<IDifferentIconEdtechDataProps> = ({
  heading,
  differentIconData,
  description,
}) => {
  const [isViewMore, setIsViewMore] = useState(9);
  return (
    <div
      className={`px-2 md:px-[100px] pt-[92px] pb-[116px] saasMarketingSolution ${
        isViewMore > 9
          ? "backgroundStartFromTopCenter differentIconCardBackgroundPosition"
          : ""
      }`}
    >
      <Container>
        <motion.div
          variants={headingVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-colorSeconday text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mb-5  integralFontFamily"
        >
          {heading}
        </motion.div>

        <motion.p
          variants={descriptionVarientForFistTime}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-themePrimary-high capitalize mb-10 text-[1.2rem] Inter text-center"
        >
          {description}
        </motion.p>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-7 max-w-[1100px] mx-auto">
          {differentIconData.map((item) => {
            if (item.id <= isViewMore) {
              return (
                <WhiteCard
                  key={item.id}
                  icon={
                    <div className="bg-gradient-to-b from-white to-colorPrimary/30 w-[62px] h-[62px] rounded-full flex justify-center items-center">
                      <item.image className="fill-colorPrimary" />
                    </div>
                  }
                  title={item.title}
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
