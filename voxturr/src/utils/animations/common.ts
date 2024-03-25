export const headerVarient = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    duration: 150,
  },
};

export const faqListVarient = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "100%",
    duration: 0.6,
    transition: {
      duration: 0.6,
      type: "string",
      stiffness: 400,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    duration: 0.6,
  },
};

export const whiteCardHoverVarient = {
  scale: 1.05,
  transition: {
    type: "",
    stiffness: 400,
    damping: 10,
  },
};

export const headingVarientForFistTime = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};

export const subHeadingVarientForFistTime = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};

export const descriptionVarientForFistTime = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};
