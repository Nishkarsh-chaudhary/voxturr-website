/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = dynamic(() => import("@/src/components/common/Container"));
import {
  FintechHeroBanner,
  ContentManagement,
  WebinarEdit,
  WebinarMarketing,
  WebinarTrendUp,
  FintechChart
  
} from "@/src/utils/Image";
import {
  growthScriptWritingVarient,
  growthTrendUpVarient,
} from "@/src/utils/animations/growthHacking";
import {
  saasHeroSectionContactUsButton,
  saasHeroSectionDescription,
  saasHeroSectionHeading,
} from "@/src/utils/animations/saas";
import { webinarHeroBannerImageVarient } from "@/src/utils/animations/webinar";
import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <div className="relative FintechHeroBackground overflow-hidden">
      <main className="py-[100px]">
        <Container>
          <div className="flex flex-col md:flex-row">
            <section className="md:w-[58%]">
              <motion.p
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="text-colorPrimary font-semibold mb-4"
              >
                <span className="text-themePrimary-low text-xl">+</span> Fintech Marketing
                 Agency
              </motion.p>
              <motion.h1
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="load-screen--message text-white uppercase font-bold  text-[42px] md:text-[42px] tracking-[0.84px] leading-[125%] mobile:leading-[100%] integralFontFamily"
              >
                FINTECH MARKETING <br />
                AGENCY - ACHIEVE THE <br />
                BEST MARKETING ROI FOR <br />
                YOUR
                <span className="text-colorPrimary"> FINTECH BUSINESS </span>
              </motion.h1>
              <motion.p
                variants={saasHeroSectionDescription}
                initial="hidden"
                animate="show"
                className="text-themePrimary-medium text-[20px] leading-[150%] mt-8 md:max-w-[90%] interFontFamily capitalize"
              >
                Proven Marketing Tactics To Make Your Money Grow and To <br /> Make
                Your Brand Show
              </motion.p>
              <motion.div
                className=""
                variants={saasHeroSectionContactUsButton}
                initial="hidden"
                animate="show"
              >
                <Link href={'/Contact-Us'}>
                <motion.button className="border border-colorPrimary text-white px-8 py-4 text-lg font-semibold uppercase hover:text-white hover:bg-colorPrimary rounded-xl mt-[64px] hover:shadow-boxShadowSecondary">
                  Contact us
                </motion.button>
                </Link>
              </motion.div>
            </section>
            <motion.section
              className="md:w-[42%] relative"
              variants={webinarHeroBannerImageVarient}
              initial="hidden"
              animate="show"
            >
              <motion.div className="mt-10">
                <Image
                  src={FintechHeroBanner}
                  alt="heroBanner"
                  loading="eager"
                  className="w-full md:h-[624px]  object-cover"
                />
              </motion.div>

              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute top-16 -left-16 hidden lg:block"
              >
                <ContentManagement />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute top-[270px] -right-[90px] hidden lg:block"
              >
                <WebinarEdit />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute bottom-16 -left-[180px] hidden lg:block"
              >
                <WebinarTrendUp />
              </motion.div>
              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-16 -right-28 hidden lg:block"
              >
                <WebinarMarketing />
              </motion.div>

              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute -top-16 right-[180px] hidden lg:block"
              >
                <FintechChart />
              </motion.div>
            </motion.section>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HeroSection;
