"use client";
import dynamic from "next/dynamic";

const CaseStudies = dynamic(() => import("@/src/components/CaseStudies"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const CommonIconCard = dynamic(()=>import('@/src/components/CommonIconCard'),{
  ssr:false,
  loading: ()=> <p>Loading...</p>
})
const CompanyMarquee = dynamic(() => import("@/src/components/CompanyMarquee"));
const DifferentIconCard = dynamic(
  () => import("@/src/components/DifferentIconCard"),{
    ssr:false,
    loading:()=><p>Loading...</p>
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
const SwipeableCard = dynamic(() => import("@/src/components/SwipeableCard"), {
  ssr:false,
  loading: () => <p>Loading...</p>
});

const HeroSection = dynamic(()=>import('@/src/screens/Saas/components/HeroSection'))
const TopRated = dynamic(()=>import('@/src/screens/Saas/components/TopRated'))
import {
  BrandAndCountingList,
  ProductMarketingList,
  caseStudiesList,
  faqList,
  marketingSolutionList,
  productAndServiceList,
} from "@/src/utils/Constant/Saas";
import {
  saasCaseStudieDescription,
  saasCaseStudieHeading,
  saasCommoncardHeading,
  saasDifferentcardHeading,
  saasGetInTouchDescription,
  saasGetInTouchHeading,
  saasSwipeablecardHeading,
  saasSwipeablecardSubHeading
} from "@/src/utils/variables";

const Saas = () => {
  return (
    <main className="">
      <HeroSection />
      <CompanyMarquee
        title="Facilitated 150+ Brands & Counting"
        companyMarqueeBandList={BrandAndCountingList}
      />
      <SwipeableCard
      subHeading={saasSwipeablecardSubHeading}
        heading={saasSwipeablecardHeading}
        swipeableCardData={ProductMarketingList}
      />
      <CaseStudies
        mainTitle={saasCaseStudieHeading}
        description={saasCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
      <DifferentIconCard
        heading={saasDifferentcardHeading}
        differentIconData={marketingSolutionList}
      />
      <TopRated />
      <CommonIconCard
        heading={saasCommoncardHeading}
        commonIconCardData={productAndServiceList}
        mainContainerClass="saasProductServiceBackgroundPostion"
      />

      <GetInTouch
        heading={saasGetInTouchHeading}
        description={saasGetInTouchDescription}
      />
      <FAQ
        title="Frequently Asked Questions (FAQ’s)"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
    </main>
  );
};

export default Saas;
