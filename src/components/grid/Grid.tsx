import { MaxContainer } from "../shared/MaxContainer";
import { GridCard1 } from "./GridCard1";
import { GridCard2 } from "./GridCard2";
import { EmblaCarousel } from "./EmblaCarousel";
import { carousel1Images, carousel2Images } from "@/constants";
import {
  accessories,
  houseUtils,
  iron,
  kitchenUtils,
  medicsCare,
} from "@/assets";

export const Grid = () => {
  return (
    <section className="px-2.5">
      <MaxContainer className="grid-section h-full">
        <EmblaCarousel imagesArray={carousel1Images} className="carousel-1" />
        <GridCard1
          classType="accessories"
          cardMainBg="bg-[#faedbe]"
          background="bg-gigatron-yellow"
          borderRadius="rounded-[10%_10%_50%_50%_/_0%_0%_30%_30%]"
          image={accessories}
          title="Vodic za dodatnu opremu za mobilne telefone"
        />
        <EmblaCarousel imagesArray={carousel2Images} className="carousel-2" />
        <div className="carousel-2 rounded-xl bg-green-500"></div>
        <GridCard2
          classType="medics-care"
          title="Medics Care - savremena tehnologija za potpunu..."
          image={medicsCare}
        />
        <GridCard2
          classType="iron"
          title="Philips parne stanice + poklon daska za peglanje"
          image={iron}
        />
        <GridCard1
          classType="kitchen-utils"
          cardMainBg="bg-card-blue"
          background="bg-main-blue"
          borderRadius="rounded-[10%_10%_50%_50%_/_0%_0%_30%_30%]"
          image={kitchenUtils}
          textColor="text-white"
          title="Snizene cene Ninja malih kuhinjskih aparata"
        />
        <GridCard1
          classType="house-utils"
          cardMainBg="bg-card-blue"
          background="bg-main-blue"
          borderRadius="rounded-[10%_10%_50%_50%_/_0%_0%_30%_30%]"
          image={houseUtils}
          textColor="text-white"
          title="Snizene cene Shark malih kucnih aparata i aparata za negu kose"
        />
      </MaxContainer>
    </section>
  );
};
