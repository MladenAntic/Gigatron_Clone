import { brands } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";

export const Brands = () => {
  return (
    <section className="mb-32 px-2.5">
      <MaxContainer className="mb-8">
        <h2 className="text-xl font-semibold max-sm:text-lg">Brendovi</h2>
      </MaxContainer>
      <MaxContainer className="grid grid-cols-5 gap-y-10 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-dark-gray flex-center mx-auto size-40 rounded-full max-sm:size-30"
          >
            <img
              src={brand.logo}
              className="size-[7.0313rem] object-contain max-sm:size-[5.3125rem]"
            />
          </div>
        ))}
      </MaxContainer>
    </section>
  );
};
