interface GridCard2Props {
  classType: string;
  title: string;
  image: string;
}

export const GridCard2 = ({ classType, title, image }: GridCard2Props) => {
  return (
    <a
      href="#"
      className={`${classType} bg-main-blue relative block rounded-xl p-5`}
    >
      <div className="bg-card-blue absolute right-0 bottom-0 left-0 h-1/2 w-full rounded-[50%_50%_50%_50%_/_40%_40%_0%_0%] rounded-b-xl"></div>
      <h4 className="relative z-10 h-full w-1/2 text-lg font-semibold text-wrap text-white max-md:w-full max-md:text-center max-sm:text-sm">
        {title}
      </h4>
      <img
        src={image}
        alt="Medics Care"
        className="absolute right-5 bottom-4 w-[6.25rem] max-md:right-1/2 max-md:w-[12.5rem] max-md:translate-x-1/2 max-sm:w-[9.375rem]"
      />
    </a>
  );
};
