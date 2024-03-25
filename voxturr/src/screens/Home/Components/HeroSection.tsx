"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React , {FC} from 'react';
import Container from '@/src/components/common/Container';
import { saasHeroSectionContactUsButton, saasHeroSectionDescription, saasHeroSectionHeading } from '@/src/utils/animations/saas';
import { Arrow2, HomeArrow } from '@/src/utils/Image';

interface IHomeCardProps {
    heading: { id: number; heading: JSX.Element }[];
}

const HeroSection: FC<IHomeCardProps> = ({ heading }) => {
    // Define an array of items (replace this with your actual data)
  return (
    <div className='relative homepageHerosection overflow-hidden'>
      <main className='pt-[68px]'>
        <Container>
            <motion.h1
            variants={saasHeroSectionHeading}
            initial = "hidden"
            animate = 'show'
            className='load-screen--message text-colorSeconday text-center font-[700] text-[45px] md:text-[84px] tracking-[1.68px] leading-[125%] mobile:leading-[110%] integralFontFamily'
            >
                next generation <br /> 
                design <span className='text-colorPrimary'>agency</span>
            </motion.h1>
            <motion.p 
                variants={saasHeroSectionDescription}
                initial = "hidden"
                animate = 'show'
                className='mx-auto text-themePrimary-topMedium text-xl leading-[150%] max-w-[900px] mt-8 text-center capitalize'
            >
                Lorem ipsum dolor sit amet consectetur. Amet convallis sit auctor viverra praesent.
            </motion.p>
            <motion.div
            className="flex justify-center"
            variants={saasHeroSectionContactUsButton}
            initial="hidden"
            animate="show"
          > 
            <Link href={"/Contact-Us"}>
            <motion.button className="border border-colorSeconday bg-colorSeconday text-white px-8 py-4 text-lg font-semibold uppercase hover:text-white hover:bg-colorPrimary rounded-xl mt-12 hover:shadow-boxShadowSecondary
            hover:border-colorPrimary mb-10">
              Contact us
            </motion.button>
            </Link>
          </motion.div>
          <motion.div className='md:flex flex-coloumn md:grid md:grid-cols-3 gap-7 mobile:grid mobile:gap-5 z-20 '>
          {heading.map((item,id) => (
              <motion.div
                key={item.id}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.9,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                className="p-8 md:max-w-[393px] md:h-[240px] border border-borderPrimary/70 rounded-t-3xl  mobile:rounded-3xl bg-transparent shadow-lg flex justify-between"
                
              >
                <h4 className='text-colorSeconday integralFontFamily text-[32px] font-normal tracking-[0.64px] leading-[140%]'>{item.heading}</h4>
                <HomeArrow/>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </main>
    </div>
  )
}


export default HeroSection
  