import { ChevronRightIcon } from "lucide-react";
import { MaxContainer } from "./shared/MaxContainer";
import { blogCards } from "@/constants";
import { BlogCardProps } from "@/types";

const BlogCard = ({ image, title, description }: BlogCardProps) => (
  <div className="flex flex-col self-start bg-white p-5">
    <div className="mb-10 flex flex-col gap-2">
      <img src={image} className="h-1/2 w-full rounded-xl" alt={title} />
      <h5 className="max-xs:text-sm text-lg font-semibold">{title}</h5>
      <p className="max-xs:text-[0.625rem] text-sm text-gray-500">
        {description}
      </p>
    </div>

    <a href="#" className="max-xs:text-sm flex items-center gap-1">
      Detaljnije <ChevronRightIcon className="max-xs:size-4" />
    </a>
  </div>
);

export const Blog = () => {
  return (
    <section className="mb-15 px-2.5">
      <MaxContainer className="flex-center rounded-xl bg-white max-md:flex-col">
        {blogCards.map(({ image, title, description }) => (
          <BlogCard
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </MaxContainer>
    </section>
  );
};
