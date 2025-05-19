import { features } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";

export const FeaturesBanner = () => {
  return (
    <section className="px-2.5 my-8">
      <MaxContainer className="grid grid-cols-4 gap-5 rounded-xl bg-white py-7 max-lg:grid-cols-2 max-lg:px-10 max-sm:grid-cols-1">
        {features.map(({ Icon, title, href }) => (
          <div
            key={title}
            className="flex-center gap-4 max-lg:justify-self-start"
          >
            <Icon className="size-8" />
            <div className="flex flex-col">
              <h3 className="text-md">{title}</h3>
              <a href={href} className="text-sm underline">
                Saznaj vise
              </a>
            </div>
          </div>
        ))}
      </MaxContainer>
    </section>
  );
};
