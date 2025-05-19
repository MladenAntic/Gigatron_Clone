import { featuredBrandCards } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";
import { FeaturedCardProps } from "@/types";

const FeaturedBrandCard = ({
  logo,
  title,
  href,
  image,
  background,
}: FeaturedCardProps) => (
  <div className={`flex flex-col flex-1 pt-5 items-center gap-5 ${background} rounded-xl pt-5 px-5`}>
    <img src={logo} alt={title} className="w-[9.375rem]" />
    <h3 className="text-xl font-semibold max-sm:text-sm">{title}</h3>

    <a href={href} className="border-gray rounded-md border bg-white px-4 py-1">
      Saznaj vise
    </a>

    <img src={image} alt={title} className="" />
  </div>
);

export const FeaturedBrands = () => {
  return (
    <section className="mb-15 px-2.5">
      <MaxContainer className="flex gap-5 max-md:flex-col">
        {featuredBrandCards.map((card) => (
          <FeaturedBrandCard key={card.title} {...card} />
        ))}
      </MaxContainer>
    </section>
  );
};
