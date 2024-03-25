"use client";
import dynamic from "next/dynamic";

const CaseStudies = dynamic(() => import("@/src/components/CaseStudies"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});

const CommonIconCard = dynamic(()=>import('@/src/components/CommonIconCard'),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})
const FAQ = dynamic(() => import("@/src/components/FAQ"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});

const GetInTouch = dynamic(() => import("@/src/components/GetInTouch"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});
const HackingMehodology = dynamic(()=>import('@/src/screens/GrowthHacking/components/HackingMehodology'),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})

const HeroSection = dynamic(()=>import('@/src/screens/GrowthHacking/components/HeroSection'))

const SuccessStories = dynamic(
  () => import("../GrowthHacking/components/SuccessStories"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
import { faqList, growthMarketing } from "@/src/utils/Constant/GrowthHacking";
import { caseStudiesList } from "@/src/utils/Constant/GrowthHacking";
import {
  B2BGetInTouchDescription,
  B2BGetInTouchHeading,
  growthCaseStudieDescription,
  growthCaseStudieHeading,
  growthCommonIconCardHeading,
  growthGetInTouchDescription,
  growthGetInTouchHeading,
} from "@/src/utils/variables";

const GrowthHacking = () => {
  return (
    <>
      <HeroSection />
      <CommonIconCard
        heading={growthCommonIconCardHeading}
        commonIconCardData={growthMarketing}
      />
      <HackingMehodology />
      <CaseStudies
        mainTitle={growthCaseStudieHeading}
        description={growthCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
      <SuccessStories />
      <GetInTouch
        heading={growthGetInTouchHeading}
        description={growthGetInTouchDescription}
      />
      <FAQ
        title="Frequently Asked Questions (FAQ’s)"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
     
    </>
  );
};

export default GrowthHacking;
