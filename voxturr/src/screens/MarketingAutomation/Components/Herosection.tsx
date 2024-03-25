/* eslint-disable react/no-unescaped-entities */
// "use client";
import { m,LazyMotion,domAnimation } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const  Container = dynamic(()=>import('@/src/components/common/Container'))
import {
  B2BMarketingHeroBanner,
  ContentManagement,
  WebinarEdit,
  WebinarTrendUp,
  WebinarB2B,
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
    <>
      <div className="relative B2BHeroBackground overflow-hidden">
        <main className="py-[100px]">
          <Container>
            <div className="flex flex-col md:flex-row">
              <section className="md:w-[58%]">
                <LazyMotion features={domAnimation}>
                  <m.p
                    variants={saasHeroSectionHeading}
                    initial="hidden"
                    animate="show"
                    className="text-colorPrimary font-semibold mb-4"
                  >
                    <span className="text-themePrimary-higher">+</span> Proven
                    Strategies, Sustainable Growth
                  </m.p>
                  <m.h1
                    variants={saasHeroSectionHeading}
                    initial="hidden"
                    animate="show"
                    className="load-screen--message text-white uppercase font-bold text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[135%] integralFontFamily"
                  >
                    Award-Winning
                    <span className="text-colorPrimary"> B2B marketing </span>
                    Agency-Marketing Innovation <br /> Done Right
                  </m.h1>
                  <m.p
                    variants={saasHeroSectionDescription}
                    initial="hidden"
                    animate="show"
                    className="text-themePrimary-medium text-xl leading-[150%] mt-8 md:max-w-[90%] capitalize"
                  >
                    Voxturr is one of the leading B2B Marketing Companies that <br />
                    helps B2B businesses generate qualified leads with a <br />
                    strategic and sustainable business-centric approach. Our <br />
                    experience as a B2B lead generation agency for Fortune 500 <br />
                    companies and mid-size businesses has made us experts in <br />
                    multi-channel B2B marketing, dedicated towards business <br />
                    growth.
                  </m.p>
                  <m.div
                    className=""
                    variants={saasHeroSectionContactUsButton}
                    initial="hidden"
                    animate="show"
                  >
                    <Link 
                    href={"/Contact-Us"}>
                    <m.button className="border border-colorPrimary text-white px-8 py-4 text-lg font-semibold uppercase hover:text-white hover:bg-colorPrimary rounded-xl mt-12 hover:shadow-boxShadowSecondary">
                      Contact us
                    </m.button>
                    </Link>
                  </m.div>
                </LazyMotion>
              </section>
              <LazyMotion features={domAnimation}>
                <m.section
                 variants={webinarHeroBannerImageVarient}
                 initial="hidden"
                 animate="show"
                  className="md:w-[42%] relative"
                >
                  <m.div 
                    className="mt-10">
                    <Image
                      src={B2BMarketingHeroBanner}
                      alt="heroBanner"
                      loading="lazy"
                      className="w-full md:h-[624px]  object-cover"
                    />
                  </m.div>

                  <m.div
                    variants={growthScriptWritingVarient}
                    initial="hidden"
                    animate="show"
                    className="absolute top-[150px] -right-[150px]  hidden lg:block"
                  >
                    <ContentManagement />
                  </m.div>
                  <m.div
                    variants={growthTrendUpVarient}
                    initial="hidden"
                    animate="show"
                    className="absolute top-16 left-0 hidden lg:block"
                  >
                    <WebinarEdit />
                  </m.div>
                  <m.div
                    variants={growthTrendUpVarient}
                    initial="hidden"
                    animate="show"
                    className="absolute -bottom-10 right-0 hidden lg:block transform hover:rotate-45 "
                  >
                    <WebinarTrendUp />
                  </m.div>
                  <m.div
                    variants={growthScriptWritingVarient}
                    initial="hidden"
                    animate="show"
                    className="absolute -bottom-[35px] -left-[112px] hidden lg:block"
                  >
                    <WebinarB2B />
                  </m.div>
                </m.section>
              </LazyMotion>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default HeroSection;
