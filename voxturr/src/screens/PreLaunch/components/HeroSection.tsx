/* eslint-disable react/no-unescaped-entities */
// "use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "@/src/components/common/Container";
import {
  Cards,
  Coin,
  PreLunchHeroSectionBackground,
  SaaSMarketing,
  ShoppingCart,
  WebinarMarketing,
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
                <span className="text-themePrimary-higher">+</span> Pre-launch
                Marketing
              </motion.p>
              <motion.h1
                variants={saasHeroSectionHeading}
                initial="hidden"
                animate="show"
                className="load-screen--message text-white uppercase font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] integralFontFamily"
              >
                Powerful & Target-Oriented
                <span className="text-colorPrimary"> Pre Launch </span>
                Marketing Agency
              </motion.h1>
              <motion.p
                variants={saasHeroSectionDescription}
                initial="hidden"
                animate="show"
                className="text-themePrimary-medium text-[20px] leading-[150%] mt-8 md:max-w-[90%] capitalize "
              >
                We believe, if there’s no buzz, there’s no biz. <br /> At Voxturr, we
                help businesses launch new products or <br /> services into the market
                with data-driven market-fit <br /> strategies. We strategize and
                implement high-performing <br /> launch campaigns to create a pre
                launch buzz and give your <br /> new product a powerful kickstart.
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
              <motion.div className="-mt-10 mobile:mt-20">
                <Image
                  src={PreLunchHeroSectionBackground}
                  alt="heroBanner"
                  loading="eager"
                  className="w-full md:h-[580px] object-contain"
                />
              </motion.div>

              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute top-10 -left-20 hidden lg:block"
              >
                <SaaSMarketing />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute -top-16 -right-3 hidden lg:block"
              >
                <ShoppingCart />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute bottom-28 -left-24 hidden lg:block"
              >
                <Cards />
              </motion.div>
              <motion.div
                variants={growthScriptWritingVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-16 -right-10 hidden lg:block"
              >
                <WebinarMarketing />
              </motion.div>
              <motion.div
                variants={growthTrendUpVarient}
                initial="hidden"
                animate="show"
                className="absolute -bottom-28 right-1/2 hidden lg:block"
              >
                <Coin />
              </motion.div>
            </motion.section>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default HeroSection;
