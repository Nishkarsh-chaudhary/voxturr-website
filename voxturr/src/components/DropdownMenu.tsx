// DropdownMenu.tsx
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import HeaderWhitecard from "./HeaderWhitecard";
import {CaseStudiesThink} from "@/src/utils/Image"
import Container from "./common/Container";

interface SubPageItem {
    id: number;
    title: string;
    icon:JSX.Element;
    description:string;
}

interface SubItem {
    id: number;
    title: string;
    description:string;
    icon: JSX.Element;
    subPage?: SubPageItem[];
    link:string;
}

interface PageItem {
    id: number;
    title: string;
    description?:string;
    icon?:JSX.Element;
    link: string;
    page?: SubItem[];
    subPage?: SubPageItem[];
}

interface DropdownMenuProps {
    item: PageItem;
    dropdownVisible: number | null;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, dropdownVisible }) => {
    const [selectedSubItem, setSelectedSubItem] = useState<SubItem |PageItem | null>(null);
    useEffect(() => {
        // Set the first subItem as the default selectedSubItem when the component mounts
        if (item.page && item.page.length > 0 && !selectedSubItem) {
          setSelectedSubItem(item.page[0]);
        }
      }, [item.page, selectedSubItem]);

    const handleTitleClick = (pageItem: PageItem) => {
        setSelectedSubItem(pageItem);
    };

    return (
        <>
            
            {item.page && item.page.length > 0 && dropdownVisible === item.id && (
                <div className="flex flex-row absolute top-[90px] p-10 left-1/2 transform -translate-x-1/2 md:w-[1252px] md:h-[390px] rounded-t-none rounded-b-2xl bg-white gap-2">
                    {/* Left side: Item titles */}
                    <div className="w-1/4 flex flex-col gap-3 ">
                        <h4 className="text-themePrimary-high uppercase">{item.title}</h4>
                        {item.page.map((subItem) => (
                            <div
                                key={subItem.id}
                                className={`cursor-pointer w-[278px] p-[8px]  ${selectedSubItem?.id === subItem.id
                                        ? "dropdownHeader text-colorSeconday font-semibold"
                                        : "text-themePrimary-topMedium"
                                    }`}
                                onClick={() => handleTitleClick(subItem )}
                            >   
                
                                <h2 className="rounded-md text-[16px] font-medium integralFontFamily flex gap-2">
                                    {subItem.icon}
                                    {subItem.title}
                                </h2>
                                
                                <p className="ml-7 text-[14px] interFontFamily font-medium leading-[150%] ">{subItem.description} </p>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Subitem content */}
                    {selectedSubItem && (
                        <div className="w-[605px] h-[350px] dropdownHeaderContent ">
                            <h4 className=" text-themePrimary-high uppercase ml-10 w-1/2 mb-3">{item.title}</h4>
                            <div className="grid grid-cols-2 gap-2 mt-[2px] ">
                                {selectedSubItem.subPage?.map((subPageItem) => (
                                    <div className="text-black cursor-pointer w-[278px] p-[5px] flex flex-col ">
                                        <p key={subPageItem.id} className="text-[14px] interFontFamily font-bold h-full ml-10 flex gap-2">
                                        {subPageItem.icon}
                                            {subPageItem.title}
                                        </p>
                                        <p className="text-themePrimary-high ml-[4rem] text-[11px] leading-[125%]">{subPageItem.description} </p>
                                    </div>
                                ))}
                            </div> 
                        </div>
                    )}
                    <div className="w-1/4 h-[345px]">
                        <h1 className="text-[1.1rem] tracking-[0.5] leading-[1.5] uppercase text-colorSeconday interFontFamily font-bold ml-4 underline">view all <span className="text-colorPrimary underline">case studies</span></h1>
                        <div className="h-full md:mt-4 ml-3">
                          <HeaderWhitecard 
                          image={<CaseStudiesThink/>}
                          title="ThinkSmartz"
                          description="Lorem ipsum dolor sit amet consectetur. Amet convallis sit auctor viverra praesent."
                          />          
                        </div>
                    </div>
                </div>
            )}
     
        </>
    );
};

export default DropdownMenu;
