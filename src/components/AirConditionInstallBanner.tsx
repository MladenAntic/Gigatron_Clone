import { MaxContainer } from "./shared/MaxContainer";
import technician from "../assets/technician.avif";

export const AirConditionInstallBanner = () => {
  return (
    <section className="mb-15 px-2.5">
      <MaxContainer className="relative flex items-center justify-around rounded-xl bg-[#0e215a] py-10 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:pl-20 max-sm:items-center max-sm:pl-0 max-sm:pb-55">
        <div className="flex flex-col items-center gap-1 text-xl font-semibold max-lg:items-start max-sm:items-center max-xs:text-base">
          <span className="text-gigatron-yellow">UGRADNJA KLIMA</span>
          <span className="text-white">UREDJAJA NA RATE</span>
        </div>
        <img
          src={technician}
          className="absolute bottom-0 left-1/2 w-[12.5rem] -translate-x-1/2 max-lg:left-3/4 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:bottom-0"
          alt="Technician"
        />
        <a
          href="#"
          className="bg-gigatron-yellow rounded-md px-8 py-1 text-lg transition-colors duration-200 hover:bg-yellow-300 max-xs:text-sm"
        >
          Saznajte vise
        </a>
      </MaxContainer>
    </section>
  );
};
