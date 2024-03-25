import { FC } from "react";

import { IStageCardObjectProps } from "@/src/utils/type";

interface IStageCardProps {
  stageData: IStageCardObjectProps;
}

const StageCard: FC<IStageCardProps> = ({ stageData }) => {
  const { title, description, listTitle, list } = stageData;
  return (
    <article className="p-10 !bg-white backgroundForHackingMethodologyCard z-10">
      <h4 className="text-colorSeconday font-semibold text-2xl leading-[125%]">
        {title}
      </h4>
      <p className="text-themePrimary-higher font-medium leading-[160%] mt-4 md:w-[90%] capitalize">
        {description}
      </p>
      <p className="mt-8 mb-4 text-themePrimary-higher font-medium leading-[160%]">
        {listTitle}
      </p>
      <ul className="grid grid-cols-2 gap-4 list-inside">
        {list.map((item, i) => {
          return (
            <li
              key={i}
              className="text-themePrimary-higher font-medium leading-[160%] flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-colorSeconday"></div>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default StageCard;
