import { FC } from "react";
import Image from "next/image";

import { IOurclientCardObjectProps } from "@/src/utils/type";

interface IOurclientCardProps {
  stageData: IOurclientCardObjectProps;
}

const OurclientCard: FC<IOurclientCardProps> = ({ stageData }) => {
  const { list } = stageData;
  return (
    <article className="p-10 !bg-white backgroundForHackingMethodologyCard z-10">
      <div className="flex flex-col  items-center md:grid md:grid-cols-3 lg:grid-cols-3  z-20 lg:max-w-[850px] mx-auto gap-y-10 gap-x-[7rem] md:gap-y-20 md:pr-8 ">
            {list.map((item:any) => {
              return (
                <div key={item.id}>
                  <Image src={item.icon} alt="icon" loading="lazy" />
                </div>
              );
            })}
          </div>
    </article>
  );
};

export default OurclientCard;
