interface GridCard1Props {
  classType: string;
  cardMainBg: string;
  background: string;
  borderRadius: string;
  image: string;
  textColor?: string;
  title: string;
}

export const GridCard1 = ({
  classType,
  cardMainBg,
  background,
  borderRadius,
  image,
  textColor,
  title,
}: GridCard1Props) => {
  return (
    <a
      href="#"
      className={`${classType} relative rounded-xl ${cardMainBg} block`}
    >
      <div
        className={`${background} absolute top-0 right-0 left-0 h-1/2 w-full ${borderRadius} rounded-t-xl pt-15`}
      ></div>
      <div className="flex-center relative z-10 mt-[-1.25rem] size-full flex-col gap-3">
        <img
          src={image}
          alt="Accessories"
          className="size-[12.5rem] object-contain"
        />
        <h3
          className={`px-12 text-center ${textColor} text-2xl font-semibold max-md:text-xl max-sm:text-sm`}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};
