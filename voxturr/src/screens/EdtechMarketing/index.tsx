"use client";
import dynamic from "next/dynamic";

import AccordianCards from "@/src/components/AccordianCards";


const HeroSection = dynamic(
  () => import("@/src/screens/B2BMarketing/Components/HeroSection")
);
import CommmonIconCardEdtech from "@/src/components/CommonIconCardEdtech"
import DifferentIconcardEdtech from "@/src/components/DifferentIconCardEdtech";
import SwipeableCard from "@/src/components/SwipeableCard";
import {
  B2BCaseStudieDescription,
  B2BCaseStudieHeading,
  EdtechDifferentcardHeading,
  B2BGetInTouchDescription,
  B2BGetInTouchHeading,
  B2BSwipeablecardHeading,
  EdtechDifferentcardDescription,
  EdtechCommonIconCardHeading,
  EdtechCommonIconcardDescription
} from "@/src/utils/variables";
import { ProductMarketingList } from "@/src/utils/Constant/Saas";
import {
    EdtechAgencyList,
  MarketingAutomationList,
  caseStudiesList,
  marketingSolutionList,

} from "@/src/utils/Constant/EdtechMarketing";
import CaseStudies from "@/src/components/CaseStudies";
import Result from "@/src/screens/B2BMarketing/Components/Result";
import SuccessStories from "../GrowthHacking/components/SuccessStories";
import GetInTouch from "@/src/components/GetInTouch";
import FAQ from "@/src/components/FAQ";
import {faqList} from "@/src/utils/Constant/Saas"
const Edtechmarketing = () => {
  return (
    <>
      <HeroSection />

      <CommmonIconCardEdtech
      heading={EdtechCommonIconCardHeading}
      commonIconCardData={EdtechAgencyList}
      description={EdtechCommonIconcardDescription}
      />

      <CaseStudies
        mainTitle={B2BCaseStudieHeading}
        description={B2BCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
     
      
      <SuccessStories />

      <GetInTouch
        heading={B2BGetInTouchHeading}
        description={B2BGetInTouchDescription}
      />
    </>
  );
};

export default Edtechmarketing;
