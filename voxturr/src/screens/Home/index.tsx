"use client"

import React from "react";
import dynamic from "next/dynamic";
import {
   HerosectionCardList, 
   HomecaseStudyList, 
   HomeglassCardList, 
   WorkingList 
  } from "@/src/utils/Constant/Home";

import { 
  GetintouchHeading,
  HomeAboutUsDescription, 
  HomeAboutUsHeading, 
  HomeCaseStudyHeading, 
  HomeWhyUsHeading, 
  HomeworkingHeading, 
  growthGetInTouchDescription, 
   } from "@/src/utils/variables";

import { faqList, } from "@/src/utils/Constant/Webinar";


const HeroSection = dynamic(()=>import("@/src/screens/Home/Components/HeroSection"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})
const AboutUs = dynamic(()=>import("@/src/screens/Home/Components/AboutUs"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})
const GetInTouch = dynamic(() => import("@/src/components/GetInTouch"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});
const FAQ = dynamic(() => import("@/src/components/FAQ"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
});

const Ourclient = dynamic(()=>import('@/src/screens/Home/Components/Ourclient'),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})

const HomeCaseStudy = dynamic(()=>import("@/src/screens/Home/Components/HomeCaseStudy"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})

const WhyUs = dynamic(()=>import("@/src/screens/Home/Components/whyUs"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})

const HomeCollapseCard = dynamic(()=>import("@/src/screens/Home/Components/HomeCollapseCard"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})
const Working = dynamic(()=>import("@/src/screens/Home/Components/Working"),{
  ssr: false,
    loading: () => <p>Loading...</p>,
})



const Home = () => {
  return (
    <>
      <HeroSection heading={HerosectionCardList} />

      <Working
      heading={HomeworkingHeading}
      workingCardData={WorkingList}/>

      <AboutUs
      heading={HomeAboutUsHeading}
      description={HomeAboutUsDescription}
      />
      <Ourclient/>
      <HomeCaseStudy
      heading={HomeCaseStudyHeading}
      workingCardData={HomecaseStudyList}
      />
      <HomeCollapseCard/>
      <WhyUs
      heading={HomeWhyUsHeading}
      cardData={HomeglassCardList}
      />
      <GetInTouch
      heading={GetintouchHeading}
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

export default Home;
