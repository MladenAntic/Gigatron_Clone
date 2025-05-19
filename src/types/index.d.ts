import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CarouselButtonProps {
  onClick: () => void;
  Icon: LucideIcon;
}

interface EmblaCarouselProps {
  imagesArray: string[];
  className: string;
}

interface NavLinkProps {
  Icon: LucideIcon;
  link: string;
  text: string;
  top?: boolean;
  bottom?: boolean;
}

interface BannerProps {
  imageFirst: string;
  textTop: string;
  textTopColor: string;
  textBottom: string;
  textBottomColor: string;
  imageSecond: string;
  background: string;
}

interface MaxContainerProps {
  className?: string;
  children: ReactNode;
}

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

interface TabProps {
  title: string;
  onClick: () => void;
  active: number;
  index: number;
}

interface GameProps {
  thumbnail: string;
  href: string;
}

interface FeaturedCardProps {
  logo: string;
  title: string;
  href: string;
  image: string;
  background: string;
}

interface FeaturedProductCardProps {
  image: string;
  href: string;
  title: string;
  price: string;
}

interface SocialIconProps {
  image: string;
  href: string;
  alt: string;
}
