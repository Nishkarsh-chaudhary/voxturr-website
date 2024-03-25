import { FC } from "react";

import { ArrowIcon } from "@/src/utils/Image";

interface IHeaderWhitecardProps {
  image: JSX.Element;
  title: string;
  description: string;
}

const HeaderWhitecard: FC<IHeaderWhitecardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="px-8 py-[70px] md:py-12 w-full md:w-[232px] md:h-[264px] rounded-3xl bg-themePrimary-lower relative shadow-xl">
    <div className="-mt-[24px] ">
      {image}
      </div>
      <h2 className="text-[16px] font-bold interFontFamily leading-[150%] text-colorSeconday mt-16 md:mt-1 mb-0">
        {title}
      </h2>
      <div className="mb-2 h-1/3">
      <p className="text-themePrimary-higher h-full text-[12px] leading-[150%] ">{description}</p>
      </div>
      <p className="text-[12px] text-themePrimary-high font-bold leading-[150%] capitalize">
        <span>Read more</span>
      </p>
    </div>
  );
};

export default HeaderWhitecard;
