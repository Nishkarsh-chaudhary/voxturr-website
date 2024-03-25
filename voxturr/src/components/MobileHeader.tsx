import Image from "next/image";
import React from "react";
import { Logo } from "../utils/Image";

const MobileHeader = () => {
  return (
    <header className="px-2 py-[22px] md:px-[100px] flex md:hidden justify-between items-center">
      <Image src={Logo} alt="logo" loading="eager" />
      <div className="flex gap-8 items-center">
        menubar
        {/* {HeaderData?.map((item) => {
          return (
            <div
              key={item?.id}
              className="text-sm font-medium cursor-pointer flex items-center gap-2"
            >
              <h4>{item?.title}</h4>
              {item?.page?.length > 0 && (
                <DropArrow className="stroke-colorSeconday stroke-[1.5px] rotate-180" />
              )}
            </div>
          );
        })}
        <Link
          href={"#"}
          className="text-sm font-medium cursor-pointer px-5 py-3 border border-colorPrimary rounded-lg"
        >
          Contact Us
        </Link> */}
      </div>
    </header>
  );
};

export default MobileHeader;
