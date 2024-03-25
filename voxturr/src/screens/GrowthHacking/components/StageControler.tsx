import { stageControlerVarient } from "@/src/utils/animations/growthHacking";
import { motion } from "framer-motion";
import { FC } from "react";

interface IStageControllerProps {
  activeStage: number;
  setActiveStage: (activeStage: number) => void;
}

const StageControler: FC<IStageControllerProps> = ({
  activeStage,
  setActiveStage,
}) => {
  return (
    <motion.div
      variants={stageControlerVarient}
      initial="hidden"
      animate="show"
      className="lg:w-[30%] flex flex-col-reverse lg:flex-row gap-1"
    >
      <ul className="flex flex-row lg:flex-col items-center">
        {activeStage == 1 ? (
          <motion.li
            key="early"
            layoutId="underline"
            className={`w-1/3 lg:w-1 h-1 lg:h-20 bg-[#B95FCE] rounded-full `}
          ></motion.li>
        ) : (
          <motion.li
            className={`w-1/3 lg:w-0.5 h-0.5 lg:h-20 bg-themePrimary-low rounded-t-full`}
          ></motion.li>
        )}

        {activeStage == 2 ? (
          <motion.li
            key="growth"
            layoutId="underline"
            className={`w-1/3 lg:w-1 h-1 lg:h-20 bg-[#B95FCE] rounded-full `}
          ></motion.li>
        ) : (
          <motion.li
            className={`w-1/3 lg:w-0.5 h-0.5 lg:h-20 bg-themePrimary-low`}
          ></motion.li>
        )}
        {activeStage == 3 ? (
          <motion.li
            key="expansion"
            layoutId="underline"
            className={`w-1/3 lg:w-1 h-1 lg:h-20 bg-[#B95FCE] rounded-full `}
          ></motion.li>
        ) : (
          <motion.li
            className={`w-1/3 lg:w-0.5 h-0.5 lg:h-20 bg-themePrimary-low rounded-b-full`}
          ></motion.li>
        )}
      </ul>
      <div className="px-5 w-full lg:w-[200px] text-lg font-medium flex flex-row lg:flex-col items-center gap-1">
        <div
          className={`w-1/3 lg:w-fit h-20 rounded-t-full flex items-center cursor-pointer text-center lg:text-left ${
            activeStage === 1
              ? "text-colorSeconday font-semibold"
              : "text-themePrimary-low"
          }`}
          onClick={() => setActiveStage(1)}
        >
          Early Stage
        </div>
        <div
          className={`w-1/3 lg:w-fit h-20 rounded-t-full flex items-center cursor-pointer text-center lg:text-left ${
            activeStage === 2
              ? "text-colorSeconday font-semibold"
              : "text-themePrimary-low"
          }`}
          onClick={() => setActiveStage(2)}
        >
          Growth Stage
        </div>
        <div
          className={`w-1/3 lg:w-fit h-20 rounded-t-full flex items-center cursor-pointer text-center lg:text-left ${
            activeStage === 3
              ? "text-colorSeconday font-semibold"
              : "text-themePrimary-low"
          }`}
          onClick={() => setActiveStage(3)}
        >
          Maturity & Expansion Stage
        </div>
      </div>
    </motion.div>
  );
};

export default StageControler;
