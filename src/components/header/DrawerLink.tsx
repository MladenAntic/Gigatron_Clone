interface DrawerLinkProps {
  link: string;
  text: string;
}

export const DrawerLink = ({ link, text }: DrawerLinkProps) => {
  return (
    <a
      href={link}
      className="flex-between w-[95%] cursor-pointer border-b border-gray-200 py-2"
    >
      {text}
    </a>
  );
};
