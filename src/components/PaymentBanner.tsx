import customerSupport from "../assets/customer-support.avif";
import { MaxContainer } from "./shared/MaxContainer";

export const PaymentBanner = () => {
  return (
    <section className="my-8 px-2.5">
      <MaxContainer className="flex-between bg-gray relative rounded-lg py-2 pr-4 pl-28 max-lg:pl-4 max-sm:justify-start! max-sm:gap-7 max-sm:py-8">
        <img src={customerSupport} width={75} height={75} />
        <p className="max-xs:text-[0.625rem] text-lg max-md:text-sm max-sm:self-start">
          <b>Veliki izbor nacina placanja</b> - kupujte bez brige!
        </p>
        <a
          href="#"
          className="hover:bg-light-gray rounded-md border border-black/25 bg-white px-10 py-2 transition-colors duration-200 max-[31.25rem]:border-none max-[31.25rem]:bg-transparent max-[31.25rem]:px-0 max-[31.25rem]:py-0 max-[31.25rem]:text-black max-[31.25rem]:underline max-md:text-sm max-sm:absolute max-sm:bottom-5 max-sm:left-30"
        >
          Saznaj vise
        </a>
      </MaxContainer>
    </section>
  );
};
