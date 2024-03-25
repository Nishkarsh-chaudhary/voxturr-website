"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";



const Container = dynamic(() => import("@/src/components/common/Container"));
const GetInTouchForm = dynamic(() => import("@/src/components/GetInTouchForm"));
import {
    descriptionVarientForFistTime,
    headingVarientForFistTime,
    subHeadingVarientForFistTime,
} from "@/src/utils/animations/common";
import { IHomeglassCardObjectProps } from "@/src/utils/type";
import HomeglassCard from "@/src/components/HomeglassCard";


interface IWhyUsProps {
    heading: JSX.Element;
    cardData: IHomeglassCardObjectProps[];
}

const WhyUs: FC<IWhyUsProps> = ({ heading, cardData }) => {
    return (
        <div className="bg-colorSeconday px-2 py-24 md:px-[84px] gap-4 relative saasHeroBackground">
            <Container>
                <div className="flex flex-col md:flex-row gap-5">
                    <section className="md:w-1/3">
                        <motion.p
                            variants={subHeadingVarientForFistTime}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-colorPrimary font-semibold leading-[150%] capitalize"
                        >
                            <span className="text-themePrimary-medium">+ </span>Values
                        </motion.p>
                        <motion.div
                            variants={headingVarientForFistTime}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-white font-black uppercase text-[1.5rem] md:text-[2.6rem] tracking-[0.84px] leading-[125%] mt-4  integralFontFamily"
                        >
                            {heading}
                        </motion.div>

                        <Link href={"/Contact-Us"}>
                            <motion.button
                                variants={descriptionVarientForFistTime}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="uppercase text-white text-lg font-semibold border border-colorPrimary rounded-lg px-8 py-3 mt-[48px] hover:bg-colorPrimary hover:shadow-boxShadowSecondary "
                            >
                                Contact us
                            </motion.button>
                        </Link>
                    </section>

                    <section className="w-full  md:grid md:grid-cols-2 gap-4 mobile:grid mobile:gap-4">
                        {cardData.map((item:any) => {
                            return (
                                <HomeglassCard
                                    icon={<item.icon/>}
                                    title={<>{item.title}</>}
                                    description={item.description}
                                    isHoverStyle
                                />
                            )
                        })}
                    </section>

                </div>
            </Container>
        </div>
    );
};

export default WhyUs;
