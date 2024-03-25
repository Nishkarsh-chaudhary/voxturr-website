import Image from "next/image";
import Marquee from "react-fast-marquee";

import { ICompanyMarqueeBandList } from "@/src/utils/type";
import { FC } from "react";

interface ICompanyMarqueeProps {
  title: string;
  companyMarqueeBandList: ICompanyMarqueeBandList[];
}

const CompanyMarquee: FC<ICompanyMarqueeProps> = ({
  title,
  companyMarqueeBandList,
}) => {
  return (
    <main className="bg-colorSeconday py-12 z-50">
      <p className="text-colorPrimary font-semibold leading-[150%] capitalize text-center">
        <span className="text-themePrimary-higher">+ </span>
        {title}
      </p>
      <Marquee
        className="mt-9"
        speed={40}
        autoFill
        play={companyMarqueeBandList?.length > 6 ? true : false}
      >
        {companyMarqueeBandList.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.media}
              alt=""
              className="mr-12"
              loading="lazy"
            />
          );
        })}
      </Marquee>
    </main>
  );
};

export default CompanyMarquee;
