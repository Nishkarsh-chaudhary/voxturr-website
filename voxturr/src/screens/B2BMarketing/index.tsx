"use client"
import dynamic from "next/dynamic";
import Head from "next/head";
const HeroSection = dynamic(()=> import("@/src/screens/B2BMarketing/Components/HeroSection"))


const DifferentIconCard = dynamic(
  () => import("@/src/components/DifferentIconCard"),{
    ssr:false,
    loading:()=><p>Loading...</p>
  }
);

const SwipeableCard = dynamic(() => import("@/src/components/SwipeableCard"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});
import {
  B2BCaseStudieDescription,
  B2BCaseStudieHeading,
  B2BDifferentcardHeading,
  B2BGetInTouchDescription,
  B2BGetInTouchHeading,
  B2BSwipeablecardHeading,
  B2BSwipeablecardSubHeading
} from "@/src/utils/variables";
import { ProductMarketingList } from "@/src/utils/Constant/Saas";
import {
  caseStudiesList,
  faqList,
  marketingSolutionList,
} from "@/src/utils/Constant/B2BMarketing";

const CaseStudies = dynamic(() => import("@/src/components/CaseStudies"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Result = dynamic(
  () => import("@/src/screens/B2BMarketing/Components/Result"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
);


const SuccessStories = dynamic(
  () => import("../GrowthHacking/components/SuccessStories"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const GetInTouch = dynamic(() => import("@/src/components/GetInTouch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const FAQ = dynamic(() => import("@/src/components/FAQ"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const B2BMarketing = () => {
  return (
    <>
    <Head>
      <title>B2B Marketing</title>
    </Head>
      <HeroSection />
      <SwipeableCard
        subHeading={B2BSwipeablecardSubHeading}
        heading={B2BSwipeablecardHeading}
        swipeableCardData={ProductMarketingList}
      />

      <DifferentIconCard
        heading={B2BDifferentcardHeading}
        differentIconData={marketingSolutionList}
      />

      <CaseStudies
        mainTitle={B2BCaseStudieHeading}
        description={B2BCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
      <Result />
      <SuccessStories />

      <GetInTouch
        heading={B2BGetInTouchHeading}
        description={B2BGetInTouchDescription}
      />

      <FAQ
        title="Frequently Asked Questions (FAQ’s)"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
    </>
  );
};

export default B2BMarketing;
