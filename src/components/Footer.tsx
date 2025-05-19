import { socialIcons } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";
import { SocialIconProps } from "@/types";

const SocialIcon = ({ image, href, alt }: SocialIconProps) => (
  <a href={href}>
    <img
      src={image}
      className="filter-white max-xs:size-5 size-7 rounded-full"
      alt={alt}
    />
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-main-blue px-2.5 py-10">
      <MaxContainer className="flex-between max-xs:flex-col max-xs:flex-center">
        <a
          href="/"
          className="text-gigatron-yellow cursor-pointer text-3xl font-bold tracking-tighter"
        >
          MEGATRON
        </a>

        <div className="flex-center gap-3">
          {socialIcons.map((icon) => (
            <SocialIcon key={icon.alt} {...icon} />
          ))}
        </div>
      </MaxContainer>
    </footer>
  );
};
