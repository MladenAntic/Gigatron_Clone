import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { CarouselButtonProps, EmblaCarouselProps } from "@/types";

type PropType = ComponentPropsWithRef<"button">;

const CarouselButton = ({ onClick, Icon }: CarouselButtonProps) => (
  <button
    className="flex-center border-gray size-9 cursor-pointer rounded-full border bg-white active:scale-95"
    onClick={onClick}
  >
    <Icon />
  </button>
);

const DotButton: React.FC<PropType> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export const EmblaCarousel = ({
  imagesArray,
  className,
}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div
      className={`${className} relative cursor-grab overflow-hidden rounded-xl`}
      ref={emblaRef}
    >
      <div className="flex size-full">
        {imagesArray.map((image, index) => (
          <div key={index} className="shrink-0 grow-0 basis-full">
            <img src={image} className="size-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex-between absolute bottom-0 w-full p-5 max-sm:p-2.5">
        <div className="flex-center gap-2">
          <CarouselButton onClick={onPrevButtonClick} Icon={ChevronLeftIcon} />
          <CarouselButton onClick={onNextButtonClick} Icon={ChevronRightIcon} />
        </div>

        <div className="embla__dots cursor-pointer self-end rounded bg-gray-500 p-1 max-sm:hidden!">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? `${" "}embla__dot--selected` : "",
              )}
            />
          ))}
        </div>

        <a
          href="#"
          className="hover:bg-light-gray max-xs:px-2.5 rounded-md border border-black/25 bg-white px-10 py-2 transition-colors duration-200 max-sm:text-sm"
        >
          Saznaj vise
        </a>
      </div>
    </div>
  );
};
