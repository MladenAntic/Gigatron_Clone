import { BannerProps } from "@/types";
import { MaxContainer } from "./MaxContainer";

export const Banner = ({
  imageFirst,
  textTop,
  textTopColor,
  textBottom,
  textBottomColor,
  imageSecond,
  background,
}: BannerProps) => {
  return (
    <section className="mb-15 px-2.5">
      <MaxContainer
        className={`${background} flex-between relative rounded-xl px-5 py-7 max-lg:flex-col max-lg:items-start max-lg:pl-20 max-md:px-5 max-md:pb-45`}
      >
        <div className="flex items-center gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-md:items-center">
          <img src={imageFirst} alt="E Recycle" className="w-[12.5rem]" />
          <div className="max-xs:px-5 flex flex-col items-center gap-1 text-xl font-semibold max-lg:mb-5 max-lg:items-start">
            <span className={`max-xs:text-base ${textTopColor}`}>
              {textTop}
            </span>
            <span className={`max-xs:text-sm text-base ${textBottomColor}`}>
              {textBottom}
            </span>
          </div>
        </div>
        <img
          src={imageSecond}
          className="absolute right-65 bottom-1/2 w-[9.375rem] translate-y-1/2 max-lg:right-10 max-lg:w-[12.5rem] max-md:right-1/2 max-md:bottom-0 max-md:translate-x-1/2 max-md:translate-y-0"
          alt="Recycle"
        />
        <a
          href="#"
          className="bg-gigatron-yellow rounded-md px-8 py-1 text-lg transition-colors duration-200 hover:bg-yellow-300 max-sm:text-sm"
        >
          Saznajte vise
        </a>
      </MaxContainer>
    </section>
  );
};
