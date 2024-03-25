import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FC, useEffect, useRef } from "react";


interface IResultCardProps {
  numberOfResult: string;
  title: string;
  description: string;
  backgrundColor: string;
}

const ResultCard: FC<IResultCardProps> = ({
  description,
  numberOfResult,
  title,
  backgrundColor,
}) => {
  const direction: string = "up";
  const ref = useRef<HTMLHeadingElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(
        direction === "down" ? 0 : Number(numberOfResult?.match("\\d+"))
      );
    }
  }, [motionValue, isInView, numberOfResult]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.9,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      }}
      className="md:max-w-[393px] border border-borderPrimary/70 rounded-xl bg-white overflow-hidden shadow-boxShodowPrimary"
    >
      <div className="flex items-center justify-center px-4">
        <h3
          className="py-7 text-colorSeconday font-bold text-[56px] text-center"
          ref={ref}
        />
        <h3 className="py-7 text-colorSeconday font-bold text-[56px] text-center">
          {numberOfResult.replace(/[0-9]/g, "")}
        </h3>
      </div>
      <div
        className="flex justify-center items-center py-12 px-8"
        style={{
          background: backgrundColor,
          height: "275px",
        }}
      >
        <div className="max-w-[75%]">
          <h4 className="text-colorSeconday text-2xl font-bold leading-[140%] text-center">
            {title}
          </h4>
          <p className="text-themePrimary-higher font-medium leading-[160%] text-center mt-5">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
