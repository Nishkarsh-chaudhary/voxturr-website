// components/Card.tsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  backgroundImage: any;
  isOpen: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const CollapseCard: React.FC<CardProps> = ({
  title,
  backgroundImage,
  isOpen,
  onHoverStart,
  onHoverEnd,
}) => {

  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth<639);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window;removeEventListener("resize", handleResize);
    }
  },[]);

  useEffect(() => {
    controls.start({ width: isMobile?"100%": isOpen ? "393px" : "182px" });
    controls.start({ height: isMobile?"auto": isOpen ? "600px" : "600px" });
  }, [isOpen,isMobile, controls]);
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      initial={false}
      animate={controls}
      onHoverStart={onHoverStart} 
      onHoverEnd={onHoverEnd} 
    >
      <Image
        src={backgroundImage}
        alt={title}
        layout="responsive"
        width={162}
        height={600}
        objectFit="cover"
        className="rounded-xl"
      />

      <div className="absolute inset-1 flex flex-col-reverse  items-center justify-start z-10 ">
        <h3 className="text-themePrimary-lowest  text-lg font-bold mobile:ml-5">{title}</h3>
      </div>
    
    </motion.div>
  );
};

export default CollapseCard;
