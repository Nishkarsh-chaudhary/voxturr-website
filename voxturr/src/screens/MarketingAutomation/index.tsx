"use client"
import dynamic from "next/dynamic";

const AccrordianCards = dynamic(()=> import("@/src/components/AccordianCards"),{
    ssr:false,
    loading:()=><p>Loading...</p>
  })

  const CaseStudies = dynamic(() => import("@/src/components/CaseStudies"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const FAQ = dynamic(() => import("@/src/components/FAQ"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

const CommonIconCardEdtech = dynamic(()=> import("@/src/components/CommonIconCardEdtech"))
import {
    EdtechAgencyList,
  caseStudiesList,
 
} from "@/src/utils/Constant/EdtechMarketing";

import { MarketingAutomationList } from "@/src/utils/Constant/MarketingAutomation";
import HeroSection from "./Components/Herosection";

import {
    B2BCaseStudieDescription,
    B2BCaseStudieHeading,
    MarketingCommonIconCardHeading,
    MarketingCommonIconcardDescription,
    MarketingAccordianHeading
  } from "@/src/utils/variables";

  import { faqList } from "@/src/utils/Constant/B2BMarketing";

const MarketingAutoMation = () => {
  return (
    <>
    <HeroSection/>

    <CommonIconCardEdtech
      heading={MarketingCommonIconCardHeading}
      commonIconCardData={EdtechAgencyList}
      description={ MarketingCommonIconcardDescription}
      />
    <AccrordianCards
    title= {MarketingAccordianHeading}
    MarketingAutomationList={MarketingAutomationList}
    />
     <CaseStudies
        mainTitle={B2BCaseStudieHeading}
        description={B2BCaseStudieDescription}
        caseStudiesList={caseStudiesList}
      />
    
    <FAQ
        title="Frequently Asked Questions (FAQ’s)"
        description="Our Commitment to Transperency"
        faqList={faqList}
      />
    
    </>
  )
}

export default MarketingAutoMation
