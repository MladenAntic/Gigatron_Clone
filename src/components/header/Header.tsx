import { navLinks } from "@/constants";
import { MaxContainer } from "../shared/MaxContainer";
import { NavLink } from "./NavLink";

import { Gamepad2Icon, SearchIcon } from "lucide-react";
import { MobileDrawer } from "./MobileDrawer";

export const Header = () => {
  return (
    <header className="bg-main-blue">
      <MaxContainer className="flex-between relative gap-7 px-2.5 py-5 max-lg:flex-col">
        <MobileDrawer />
        <a
          href="/"
          className="text-gigatron-yellow max-xs:text-center max-xs:text-black max-xs:px-2 max-xs:pl-1 max-xs:bg-gigatron-yellow max-xs:rounded-full cursor-pointer text-3xl font-bold tracking-tighter"
        >
          M<span className="max-xs:hidden">EGATRON</span>
        </a>
        <form className="relative w-full flex-1 rounded-full bg-white">
          <input
            type="text"
            placeholder="Unesite pojam za pretragu..."
            className="max-xs:placeholder:text-xs size-full rounded-full p-[0.9375rem] pl-5 focus:outline-none"
          />
          <button
            type="submit"
            className="flex-center bg-gigatron-yellow absolute top-0 right-0 size-12 cursor-pointer rounded-full hover:opacity-75"
          >
            <SearchIcon />
          </button>
        </form>
        <div className="flex items-center gap-7 max-lg:absolute max-lg:top-3 max-lg:right-3 max-lg:gap-3 max-sm:gap-0">
          {navLinks.slice(0, 2).map(({ id, icon, link, text }) => (
            <NavLink key={id} Icon={icon} link={link} text={text} top={true} />
          ))}
        </div>
      </MaxContainer>
      <div className="block max-w-full bg-white py-5 max-lg:hidden">
        <MaxContainer className="flex-between px-2.5">
          <div className="flex-center gap-2">
            {navLinks.slice(2, 4).map(({ id, icon, link, text }) => (
              <NavLink key={id} Icon={icon} link={link} text={text} />
            ))}
          </div>
          <div className="flex-center">
            {navLinks.slice(4, 8).map(({ id, icon, link, text }) => (
              <NavLink
                key={id}
                Icon={icon}
                link={link}
                text={text}
                bottom={true}
              />
            ))}
          </div>
          <button className="flex-center bg-cta-purple text-gigatron-yellow cursor-pointer gap-2 rounded-xl px-3 py-2 font-semibold transition-colors duration-200 hover:bg-purple-950">
            <Gamepad2Icon />
            Gaming
          </button>
        </MaxContainer>
      </div>
    </header>
  );
};
