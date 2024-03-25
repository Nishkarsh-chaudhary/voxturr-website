"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/src/components/common/Container";
import {
  GrowthIncrease,
  HeroBanner,
  NewClient,
  NewMessage,
  ProgressInSale,
} from "@/src/utils/Image";
import {
  saasHeroBannerGrowthIncrease,
  saasHeroBannerNewMessage,
  saasHeroBannerProgressInSale,
  saasHeroBannerVarient,
  saasHeroSectionContactUsButton,
  saasHeroSectionDescription,
  saasHeroSectionHeading,
} from "@/src/utils/animations/saas";

const HeroSection = () => {
  return (
    <div className="relative saasHeroBackground overflow-hidden">
      <main className="pt-[100px]">
        <Container>
          <motion.h1
            variants={saasHeroSectionHeading}
            initial="hidden"
            animate="show"
            className="load-screen--message text-white text-center font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
          >
            ACCLAIMED
            <span className="text-colorPrimary font-[Inter] font-black">
              {" "}
              SaaS
            </span>{" "}
            MARKETING AGENCY <br /> FOR TOP-TIER
            <span className="text-colorPrimary font-[Inter] font-black">
              {" "}
              SaaS{" "}
            </span>
            BUSINESSES
          </motion.h1>
          <motion.p
            variants={saasHeroSectionDescription}
            initial="hidden"
            animate="show"
            className="mx-auto text-themePrimary-medium text-xl leading-[150%] max-w-[900px] mt-8 text-center capitalize"
          >
            Voxturr has collaborated with 150+ tech companies from a diverse
            range of industries. Our extensive experience and dedicated
            expertise empowers us to deliver comprehensive SaaS marketing
            solutions for guaranteed business growth at every stage and
            milestone.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={saasHeroSectionContactUsButton}
            initial="hidden"
            animate="show"
          > 
            <Link href={"/Contact-Us"}>
            <motion.button className="border border-colorPrimary text-white px-8 py-4 text-lg font-semibold uppercase hover:text-white hover:bg-colorPrimary rounded-xl mt-12 hover:shadow-boxShadowSecondary">
              Contact us
            </motion.button>
            </Link>
          </motion.div>
          <motion.section
          variants={saasHeroBannerVarient}
          initial="hidden"
          animate="show"
          className="mt-[70px] relative"
          >
            <motion.div >
              <Image
                src={HeroBanner}
                alt="heroBanner"
                loading="lazy"
                className="md:h-[350px] md:w-[600px] xl:w-[810px] mx-auto"
              />
            </motion.div>
            <motion.div
              variants={saasHeroBannerProgressInSale}
              initial="hidden"
              animate="show"
              className="absolute top-0 lg:-left-5 xl:-left-12 hidden lg:block"
            >
              <ProgressInSale />
            </motion.div>
            <motion.div
              variants={saasHeroBannerNewMessage}
              initial="hidden"
              animate="show"
              className="absolute bottom-5 left-5 hidden lg:block"
            >
              <NewMessage />
            </motion.div>
            <motion.div
              variants={saasHeroBannerNewMessage}
              initial="hidden"
              animate="show"
              className="absolute top-5 right-0 hidden lg:block"
            >
              <GrowthIncrease />
            </motion.div>
            <motion.div
              variants={saasHeroBannerProgressInSale}
              initial="hidden"
              animate="show"
              className="absolute bottom-5 lg:-right-10 xl:-right-16 hidden lg:block"
            >
              <NewClient />
            </motion.div>
          </motion.section>
        </Container>
      </main>
    </div>
  );
};

export default HeroSection;
