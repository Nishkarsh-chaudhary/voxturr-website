"use client";
import dynamic from "next/dynamic";

const CaseStudies = dynamic(()=>import('@/src/components/CaseStudies'),{
  ssr: false,
  loading: () => <p>Loading...</p>,
})
import CompanyMarquee from "@/src/components/CompanyMarquee";
const DifferentIconCard = dynamic(()=>import('@/src/components/DifferentIconCard'),{
  ssr: false,
  loading: () => <p>Loading...</p>,
})
import FAQ from "@/src/components/FAQ";
const GetInTouch = dynamic(() => import("@/src/components/GetInTouch"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});
const SwipeableCard = dynamic(()=>import('@/src/components/SwipeableCard'),{
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const HeroSection = dynamic(()=>import('@/src/screens/Webinar/components/HeroSection'))
const Result  = dynamic(()=>import('@/src/screens/Webinar/components/Result'))
import {
  BrandAndCountingList,
  ProductMarketingList,
  caseStudiesList,
} from "@/src/utils/Constant/Saas";
import { faqList, webinarManagement } from "@/src/utils/Constant/Webinar";
import {
  webinarCaseStudieDescription,
  webinarCaseStudieHeading,
  webinarDifferentHeading,
  webinarGetInTouchDescription,
  webinarGetInTouchHeading,
  webinarSwipeableCardHeading,
  webinarSwipeableCardSubHeading
} from "@/src/utils/variables";

const Webinar = () => {
  return (
    <>
      <HeroSection />
      <CompanyMarquee
        title="Building Partnerships"
        companyMarqueeBandList={BrandAndCountingList}
      />
      <DifferentIconCard
        heading={webinarDifferentHeading}
        differentIconData={webinarManagement}
      />
      <CaseStudies
        mainTitle={webinarCaseStudieHeading}
        description={webinarCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
      <SwipeableCard
        subHeading={webinarSwipeableCardSubHeading}
        heading={webinarSwipeableCardHeading}
        swipeableCardData={ProductMarketingList}
      />
      <Result />
      <GetInTouch
        heading={webinarGetInTouchHeading}
        description={webinarGetInTouchDescription}
      />
      <FAQ
        title="Frequently Asked Questions (FAQ’s)"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
    </>
  );
};

export default Webinar;
