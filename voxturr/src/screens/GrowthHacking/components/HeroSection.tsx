/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/src/components/common/Container";
import {
  GrowthHackingHeroBanner,
  SaaSMarketing,
  WebinarEdit,
  WebinarMarketing,
  WebinarTrendUp,
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
                className="text-colorPrimary font-semibold mb-4"
              >
                <span className="text-themePrimary-higher">+</span> Growth
                Hacking Agency
              </motion.p>
              <motion.h1
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="load-screen--message text-white uppercase font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
              >
                Data-Powered
                <span className="text-colorPrimary"> Growth Marketing </span>
                for Maximized Business ROI
              </motion.h1>
              <motion.p
                variants={saasHeroSectionDescription}
                initial="hidden"
                animate="show"
                className="text-themePrimary-medium text-xl leading-[150%] mt-8 md:max-w-[90%] capitalize"
              >
                At Voxturr, we believe in providing our clients with a clear
                path towards business success through a data-driven approach.
                Our team has successfully guided numerous businesses from
                ideation to scaling, delivering exponential growth in the
                process. Remove all unpredictabilities from your business's
                success with a free growth marketing consultation at Voxturr.
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
              <motion.div className="mt-10">
                <Image
                  src={GrowthHackingHeroBanner}
                  alt="heroBanner"
                  loading="eager"
                  className="w-full md:h-[580px] object-cover"
                />
              </motion.div>

              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute top-16 -right-16 hidden lg:block"
              >
                <SaaSMarketing />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute top-16 left-0 hidden lg:block"
              >
                <WebinarEdit />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-28 right-0 hidden lg:block"
              >
                <WebinarTrendUp />
              </motion.div>
              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-16 -left-28 hidden lg:block"
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
