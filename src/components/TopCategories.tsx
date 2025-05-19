import { topCategories } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TopCategories = () => {
  return (
    <section className="mb-15 px-2.5">
      <MaxContainer className="mb-4">
        <h2 className="text-xl font-semibold max-sm:text-lg">
          Najtrazenije kategorije
        </h2>
      </MaxContainer>
      <MaxContainer className="rounded-xl bg-white px-10 py-5 max-sm:px-0">
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full"
        >
          <CarouselContent className="w-full">
            {topCategories.map((category, index) => (
              <CarouselItem key={index} className="basis-1/4 max-lg:basis-1/3">
                <div className="shrink-0 grow-0 basis-full">
                  <div className="flex-between size-full">
                    <a
                      href={category.href}
                      key={category.title}
                      className="flex-center flex-col gap-4"
                    >
                      <div className="flex-center bg-dark-gray relative size-40 rounded-full max-md:size-30 max-sm:size-20">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="size-full object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-medium max-lg:text-sm max-md:text-[0.625rem] max-sm:absolute max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:text-white max-sm:text-shadow-2xs max-sm:hover:block">
                        {category.title}
                      </h4>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 cursor-pointer bg-white active:scale-95" />
          <CarouselNext className="absolute right-0 cursor-pointer bg-white active:scale-95" />
        </Carousel>
      </MaxContainer>
    </section>
  );
};
