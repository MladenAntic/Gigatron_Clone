import {
  featuredAirConditioners,
  featuredEquipment,
  featuredEspresso,
  featuredlaptops,
  featuredProductCategories,
  featuredSmartphones,
  featuredTvs,
} from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";
import { ChevronRightIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import {
  airConditionersMain,
  equipmentMain,
  espressoMain,
  laptopsMain,
  smartphonesMain,
  tvsMain,
} from "@/assets/featured";
import { FeaturedProductCardProps } from "@/types";

const FeaturedProductCard = ({
  image,
  href,
  title,
  price,
}: FeaturedProductCardProps) => (
  <div
    key={title}
    className="flex w-full flex-col justify-between rounded-md bg-white"
  >
    <img src={image} className="mx-auto my-auto size-[9.375rem]" />

    <a
      href={href}
      className="text-md max-xs:text-sm mx-auto mb-5 w-[90%] font-semibold text-wrap"
    >
      {title}
    </a>

    <div className="flex-between w-full px-4 pb-3">
      <h3 className="text-2xl font-bold">
        {price} <sup className="">RSD</sup>
      </h3>
      <button className="bg-gigatron-yellow flex-center size-12 cursor-pointer rounded-full">
        <ShoppingCartIcon />
      </button>
    </div>
  </div>
);

export const FeaturedProducts = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="mb-15 px-2.5">
      <MaxContainer className="flex-between bg-main-blue relative overflow-hidden rounded-xl max-md:flex-col">
        <div className="z-10 rounded-tl-xl rounded-bl-xl bg-white max-md:flex max-md:flex-wrap max-md:text-sm max-md:flex-col max-md:w-full max-md:rounded-b-none">
          {featuredProductCategories.map((item, index) => (
            <div
              key={item}
              className={`flex-between border-gray hover:bg-gray group cursor-pointer gap-2 border-b px-4 py-16 hover:shadow-xl ${active === index && "bg-main-blue hover:bg-main-blue font-semibold text-white hover:shadow-none"} max-md:py-3`}
              onClick={() => setActive(index)}
            >
              <span className="">{item}</span>
              <ChevronRightIcon
                className={`${active === index && "text-gigatron-yellow"}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute -top-12 left-30 size-150 rounded-full">
          <img
            src={[
              active === 0 ? laptopsMain : undefined,
              active === 1 ? tvsMain : undefined,
              active === 2 ? smartphonesMain : undefined,
              active === 3 ? equipmentMain : undefined,
              active === 4 ? espressoMain : undefined,
              active === 5 ? airConditionersMain : undefined,
            ].find(Boolean)}
            className="size-full rounded-full object-contain"
          />
        </div>

        <div className="max-xs:grid-cols-1 z-10 grid w-[55%] grid-cols-2 gap-5 self-stretch p-5 max-md:w-full">
          {active === 0 && (
            <>
              {featuredlaptops.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
          {active === 1 && (
            <>
              {featuredTvs.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
          {active === 2 && (
            <>
              {featuredSmartphones.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
          {active === 3 && (
            <>
              {featuredEquipment.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
          {active === 4 && (
            <>
              {featuredEspresso.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
          {active === 5 && (
            <>
              {featuredAirConditioners.map(
                ({ image, href, title, price }: FeaturedProductCardProps) => (
                  <FeaturedProductCard
                    key={title}
                    image={image}
                    href={href}
                    title={title}
                    price={price}
                  />
                ),
              )}
            </>
          )}
        </div>
      </MaxContainer>
    </section>
  );
};
