import { FC } from "react";

import { ArrowIcon } from "@/src/utils/Image";

interface IGlassCardProps {
  image: JSX.Element;
  title: string;
  description: string;
  tags: string[];
  link: string;
  borderStyle: boolean;
}

const GlassCard: FC<IGlassCardProps> = ({
  image,
  title,
  description,
  tags,
  link,
  borderStyle,
}) => {
  return (
    <div className="px-8 py-[70px] md:py-12 w-full md:w-[394px] md:h-[550px] rounded-3xl glassEffectBackground relative">
          <span className="glassEffectBackgroundtop"></span>
          <span className="glassEffectBackgroundright"></span>
          <span className="glassEffectBackgroundbottom"></span>
          <span className="glassEffectBackgroundleft"></span>
        
    
      {image}
      <h2 className="text-[28px] font-bold leading-[150%] text-white mt-16 md:mt-10 mb-2">
        {title}
      </h2>
      <p className="text-themePrimary-low leading-[150%]">{description}</p>
      <div className="flex items-center gap-3 flex-wrap mt-5 mb-8">
        {tags.map((tagItem, i) => {
          return (
            <h4
              key={i}
              className="px-2 py-1 bg-white rounded-md text-colorSeconday/90 font-semibold leading-[150%]"
            >
              {tagItem}
            </h4>
          );
        })}
      </div>

      <button className="flex items-center gap-2 px-4 py-3 border border-borderPrimary rounded-lg text-lg font-semibold text-white hover:bg-colorPrimary hover:shadow-boxShadowSecondary hover:border-colorPrimary cursor-pointer">
        <span>View Project</span>
        <ArrowIcon className="stroke-colorPrimary stroke-2" />
      </button>
    </div>
  );
};

export default GlassCard;
