"use client";
import { motion } from "framer-motion";

import MobileHeader from "@/src/components/MobileHeader";
import WebHeader from "@/src/components/WebHeader";
import { headerVarient } from "@/src/utils/animations/common";

const Header = () => {
  return (
    <motion.div
      variants={headerVarient}
      initial="hidden"
      animate="show"
      className="sticky top-0  saasHeroBackground text-themePrimary-lower z-20"
    >
      <WebHeader />
      <MobileHeader />
    </motion.div>
  );
};

export default Header;
