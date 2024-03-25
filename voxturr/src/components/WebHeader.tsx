import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

import { HeaderData } from "@/src/utils/Constant/HeaderData";
import { DropArrow, Logo } from "@/src/utils/Image";

// interface PageItem {
//   id:number;
//   title:string;
//   link:string;
//   page: PageItem[];
//   subPage:PageItem[];
// }

const WebHeader = () => {

  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleToggleDropdown = (id:any) => {
    setDropdownVisible((prev) => (prev === id ? null : id));
  }

  const handleOutsideCLick = () => {
    setDropdownVisible(null);
  };

  return (
    <header className="px-2 py-[22px] md:px-[100px] hidden md:flex justify-between items-center HeaderEffectBackground">
      <Image src={Logo} alt="logo" loading="lazy" />
      <div className="flex gap-8 items-center">
        {HeaderData?.map((item) => {
          return (
            <div
              key={item?.id}
              className=""
            >
              <div onClick={() => handleToggleDropdown(item.id)} className={`text-[14px] font-medium cursor-pointer flex items-center gap-2 ${
                dropdownVisible===item.id 
                ? 'text-colorPrimary'
                : 'text-themePrimry-lower'
              }`}>

                <h4>{item?.title}</h4>

                {item?.page?.length > 0 && (
                  <DropArrow className={`stroke-[1.5px]  ${
                    dropdownVisible ===item.id ? 'stroke-colorPrimary rotate-360'
                    :'stroke-themePrimary-lower rotate-180'
                  }` } />
                )}
              </div>

              {/* dropdown content */}

              <DropdownMenu
                item={item}
                dropdownVisible={dropdownVisible}
              />
            </div>
          );
        })}
        <Link
          href={"/Contact-Us"}
          className="text-sm font-medium cursor-pointer px-5 py-3 border border-colorSeconday hover:border-colorPrimary rounded-lg  hover:text-white hover:bg-colorPrimary"
        >
          Contact
        </Link>
      </div>
    </header>
  
  );
};

export default WebHeader;
