import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { drawerLinks } from "@/constants";
import { DrawerLink } from "./DrawerLink";

export const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger className="hidden cursor-pointer text-white max-lg:absolute max-lg:top-6 max-lg:left-6 max-lg:block">
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="border-none bg-white pt-3 pr-10 pl-5 lg:hidden">
        <DrawerHeader className="flex items-end">
          <DrawerTrigger id="close-drawer-btn" className="cursor-pointer">
            <XIcon />
          </DrawerTrigger>
        </DrawerHeader>
        <div className="flex flex-col items-start gap-3">
          <a
            href="#"
            className="flex-between w-[95%] cursor-pointer border-t border-b border-gray-200 py-4 text-xl font-semibold"
          >
            Kategorije <ChevronRightIcon />
          </a>
          <a
            href="#"
            className="flex-between w-[95%] cursor-pointer border-b border-gray-200 py-4 text-xl font-semibold"
          >
            Usluge i pogodnosti <ChevronRightIcon />
          </a>
          {drawerLinks.map(({ link, text }) => (
            <DrawerLink key={text} link={link} text={text} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
