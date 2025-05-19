import { NavLinkProps } from "@/types";

export const NavLink = ({
  Icon,
  link,
  text,
  top,
  bottom,
}: NavLinkProps) => {
  return (
    <a
      href={link}
      className={`flex-center hover:bg-light-gray cursor-pointer gap-2 rounded-sm p-3 font-semibold text-black ${top && "text-white hover:bg-gray-900!"}`}
    >
      <Icon className={`${bottom && "max-xl:hidden"}`} />
      <span className={`${top && "max-lg:hidden"}`}>{text}</span>
    </a>
  );
};
