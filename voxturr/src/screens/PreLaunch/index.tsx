"use client";
import dynamic from "next/dynamic";

const CommonIconCard = dynamic(()=>import('@/src/components/CommonIconCard'),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})

const DifferentIconCard = dynamic(()=>import('@/src/components/DifferentIconCard'),{
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

const SwipeableCard = dynamic(()=>import('@/src/components/SwipeableCard'),{
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const HeroSection = dynamic(()=>import('@/src/screens/PreLaunch/components/HeroSection'))

import {
  faqList,
  preLaunchAgencyList,
  preLaunchCampaign,
  preLaunchMarketingList,
} from "@/src/utils/Constant/PreLaunch";
import {
  preLaunchCommonIconCardHeading,
  preLaunchDifferentIconCardHeading,
  preLaunchGetInTouchDescription,
  preLaunchGetInTouchHeading,
  preLaunchSwipeableCardHeading,
  preLaunchSwipeableCardSubHeading
} from "@/src/utils/variables";

const PreLunch = () => {
  return (
    <>
      <HeroSection />
      <CommonIconCard
        heading={preLaunchCommonIconCardHeading}
        commonIconCardData={preLaunchAgencyList}
      />

      <DifferentIconCard
        heading={preLaunchDifferentIconCardHeading}
        differentIconData={preLaunchMarketingList}
      />
      <SwipeableCard
      subHeading={preLaunchSwipeableCardSubHeading}
        heading={preLaunchSwipeableCardHeading}
        swipeableCardData={preLaunchCampaign}
      />
      <GetInTouch
        heading={preLaunchGetInTouchHeading}
        description={preLaunchGetInTouchDescription}
      />
      <FAQ
        title="FAQ"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
    </>
  );
};

export default PreLunch;
