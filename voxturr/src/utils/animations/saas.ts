import { Variants } from "framer-motion";

export const saasHeroSectionHeading = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export const saasHeroSectionDescription = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const saasHeroSectionContactUsButton = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.6,
    },
  },
};

export const saasHeroBannerVarient = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay:1.4,
      type:"spring",
      stiffness:100
    },
  },
};

export const saasHeroBannerProgressInSale:Variants = {
  hidden: {
    opacity: 1,
    x: -6,
  },
  show: {
    opacity: 1,
    x: 6,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
  },
};

export const saasHeroBannerGrowthIncrease:Variants = {
  hidden: {
    opacity: 1,
    y: -6,
  },
  show: {
    opacity: 1,
    y: 6,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
  },
};

export const saasHeroBannerNewMessage:Variants = {
  hidden: {
    opacity: 1,
    y: -6,
  },
  show: {
    opacity: 1,
    y: 6,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
  },
};
