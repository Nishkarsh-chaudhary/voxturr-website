"use client";

import dynamic from "next/dynamic";
const HeroSection = dynamic(
  () => import("@/src/screens/FintechMarketing/Components/HeroSection")
);
const DifferentIconCard = dynamic(
  () => import("@/src/components/DifferentIconCard"),{
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const SwipeableCard = dynamic(() => import("@/src/components/SwipeableCard"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import {
  FintechDifferentcardHeading,
  FintechCaseStudieHeading,
  FintechCaseStudieDescription,
  FintechGetInTouchHeading,
  FintechGetInTouchDescription,
  FintechSwipeablecardHeading,
  FintechSwipeableCardSubHeading
} from "@/src/utils/variables";
import { ProductMarketingList } from "@/src/utils/Constant/FintechMarketing";

import {
  caseStudiesList,  
} from "@/src/utils/Constant/FintechMarketing";

import { marketingSolutionList } from "@/src/utils/Constant/FintechMarketing";

import { BrandAndCountingList } from "@/src/utils/Constant/Saas";

const CaseStudies = dynamic(() => import("@/src/components/CaseStudies"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});

const GetInTouch = dynamic(() => import("@/src/components/GetInTouch"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});

const CompanyMarquee = dynamic(() => import("@/src/components/CompanyMarquee"),{
  ssr: false,
  loading: () => <p>Loading...</p>,
});


const FintechMarketing = () => {
  return (
    <>
      <HeroSection />

      <CompanyMarquee
        title="Building Partnerships"
        companyMarqueeBandList={BrandAndCountingList}
      />
      <SwipeableCard
        subHeading={FintechSwipeableCardSubHeading}
        heading={FintechSwipeablecardHeading}
        swipeableCardData={ProductMarketingList}
      />

      <CaseStudies
        mainTitle={FintechCaseStudieHeading}
        description={FintechCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />

      <DifferentIconCard
        heading={FintechDifferentcardHeading}
        differentIconData={marketingSolutionList}
      />
      <GetInTouch
        heading={FintechGetInTouchHeading}
        description={FintechGetInTouchDescription}
      />

      
    </>
  );
};

export default FintechMarketing;
