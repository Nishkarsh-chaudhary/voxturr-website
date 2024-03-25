"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/src/components/common/Container";
import {
  WebinarChart,
  WebinarEdit,
  WebinarHeroBanner,
  WebinarMarketing,
  WebinarScriptWriting,
  WebinarTrendUp,
} from "@/src/utils/Image";
import {
  saasHeroSectionContactUsButton,
  saasHeroSectionDescription,
  saasHeroSectionHeading,
} from "@/src/utils/animations/saas";
import {
  webinarChartVarient,
  webinarEditVarient,
  webinarHeroBannerImageVarient,
  webinarScriptWritingVarient,
  webinarTrendUpVarient,
} from "@/src/utils/animations/webinar";
import { growthTrendUpVarient } from "@/src/utils/animations/growthHacking";

const HeroSection = () => {
  return (
    <div className="relative saasHeroBackground overflow-hidden">
      <main className="py-[100px]">
        <Container>
          <div className="flex flex-col md:flex-row">
            <section className="md:w-[58%]">
              <motion.p
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="text-colorPrimary font-semibold mb-4 interFontFamily"
              >
                <span className="text-themePrimary-higher ">+</span> Webinar
                Marketing Agency
              </motion.p>
              <motion.h1
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="load-screen--message text-white font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
              >
                Webinar Marketing Agency - Proven
                <span className="text-colorPrimary"> 100% Success </span>
                in Lead Generation
              </motion.h1>
              <motion.p
                variants={saasHeroSectionDescription}
                initial="hidden"
                animate="show"
                className="text-themePrimary-medium text-[20px] leading-[150%] mt-8"
              >
                Cutting Edge Webinar Management and Webinar Promotion <br /> Services
                to Expand Growth Avenues for Your Business & Brand.
              </motion.p>
              <motion.div
                className=""
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
            </section>
            <motion.section
              className="md:w-[42%] relative"
              variants={webinarHeroBannerImageVarient}
              initial="hidden"
              animate="show"
            >
              <motion.div className="-mt-10">
                <Image
                  src={WebinarHeroBanner}
                  alt="heroBanner"
                  loading="eager"
                  className="w-full md:h-[580px] object-cover"
                />
              </motion.div>
              <motion.div
                variants={webinarChartVarient}
                initial="hidden"
                animate="show"
                className="absolute -top-12 lg:left-1/2 xl:left-1/2 hidden lg:block"
              >
                <WebinarChart />
              </motion.div>
              <motion.div
                variants={webinarScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute top-1/2 -left-20 hidden lg:block"
              >
                <WebinarScriptWriting />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute top-1/2 -right-28 hidden lg:block"
              >
                <WebinarEdit />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-16 -left-5 hidden lg:block"
              >
                <WebinarTrendUp />
              </motion.div>
              <motion.div
                variants={webinarScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-16 -right-20 hidden lg:block"
              >
                <WebinarMarketing />
              </motion.div>
            </motion.section>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HeroSection;
