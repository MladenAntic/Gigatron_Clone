import {
  BanknoteArrowUp,
  BriefcaseBusinessIcon,
  Grid2X2Icon,
  HeartHandshakeIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  UserCircleIcon,
} from "lucide-react";

import {
  carousel1Eighth,
  carousel1Eleventh,
  carousel1Fifth,
  carousel1First,
  carousel1Fourth,
  carousel1Ninth,
  carousel1Second,
  carousel1Seventh,
  carousel1Sixth,
  carousel1Tenth,
  carousel1Third,
} from "@/assets/carousel1";

import {
  carousel2Fifth,
  carousel2First,
  carousel2Fourth,
  carousel2Second,
  carousel2Seventh,
  carousel2Sixth,
  carousel2Third,
} from "@/assets/carousel2";

import {
  airCondition,
  desktopPc,
  fans,
  headphones,
  house,
  kitchen,
  lawnmowers,
  monitors,
  smartphones,
  tvs,
} from "@/assets/categories";

import {
  apple,
  beko,
  bosch,
  gorenje,
  hisense,
  lg,
  lenovo,
  logitech,
  miele,
  philips,
} from "@/assets/brands";
import { asusTuf, hp, macbookAir } from "@/assets/featured/laptops";
import { haier, philipsTv, samsungTv, tcl } from "@/assets/featured/tvs";
import {
  iphone,
  xiaomi,
  honor,
  samsungPhone,
} from "@/assets/featured/smartphones";
import {
  asusRogKeyboard,
  logitechMouse,
  marvoKeyboard,
  redragonCamera,
} from "@/assets/featured/equipment";
import {
  delonghiEspresso,
  krupsEspresso,
  mieleEspresso,
  siemensEspresso,
} from "@/assets/featured/espresso";
import {
  greeAirConditioner,
  hisense2AirConditioner,
  hisenseAirConditioner,
  tclAirConditioner,
} from "@/assets/featured/airConditioners";

import appliances from "../assets/blog-1.avif";
import kitchenware from "../assets/blog-2.avif";
import insurance from "../assets/blog-3.avif";

import samsungLogo from "../assets/samsung-logo.svg";
import samsungImage from "../assets/samsung-image.webp";
import appleLogo from "../assets/apple-logo.svg";
import appleImage from "../assets/apple-image.webp";
import {
  codMW3,
  crash,
  cyberpunk,
  fifa,
  ghostbusters,
  ghostOfTsushima,
  horizonForbiddenWest,
  nfsUnbound,
  pharaoh,
  starWars,
} from "@/assets/games";

import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";

export const navLinks = [
  {
    id: 1,
    text: "Prijava",
    icon: UserCircleIcon,
    link: "#",
  },
  {
    id: 2,
    text: "Korpa",
    icon: ShoppingCartIcon,
    link: "#",
  },
  {
    id: 3,
    text: "Proizvodi",
    icon: MenuIcon,
    link: "#",
  },
  {
    id: 4,
    text: "Pogodnosti",
    icon: Grid2X2Icon,
    link: "#",
  },
  {
    id: 5,
    text: "Akcije",
    icon: PercentCircleIcon,
    link: "#",
  },
  {
    id: 6,
    text: "Prodavnice",
    icon: ShoppingBagIcon,
    link: "#",
  },
  {
    id: 7,
    text: "Zaposlenje",
    icon: BriefcaseBusinessIcon,
    link: "#",
  },
  {
    id: 8,
    text: "Brend prodavnice",
    icon: TagIcon,
    link: "#",
  },
];

export const drawerLinks = [
  {
    link: "#",
    text: "Akcije",
  },
  {
    link: "#",
    text: "Prodavnice",
  },
  {
    link: "#",
    text: "Poslovanje",
  },
  {
    link: "#",
    text: "Gaming",
  },
  {
    link: "#",
    text: "Pravna lica",
  },
  {
    link: "#",
    text: "Kontakt",
  },
  {
    link: "#",
    text: "Zaposlenje",
  },
  {
    link: "#",
    text: "Status porudzbenice",
  },
];

export const carousel1Images = [
  carousel1First,
  carousel1Second,
  carousel1Third,
  carousel1Fourth,
  carousel1Fifth,
  carousel1Sixth,
  carousel1Seventh,
  carousel1Eighth,
  carousel1Ninth,
  carousel1Tenth,
  carousel1Eleventh,
];

export const carousel2Images = [
  carousel2First,
  carousel2Second,
  carousel2Third,
  carousel2Fourth,
  carousel2Fifth,
  carousel2Sixth,
  carousel2Seventh,
];

export const features = [
  {
    Icon: TagIcon,
    title: "Najnovije akcije",
    href: "#",
  },
  {
    Icon: HeartHandshakeIcon,
    title: "GigaMax Loyalty",
    href: "#",
  },
  {
    Icon: BanknoteArrowUp,
    title: "Kupovina na rate",
    href: "#",
  },
  {
    Icon: TruckIcon,
    title: "Isporuka",
    href: "#",
  },
];

export const topCategories = [
  {
    href: "#",
    image: headphones,
    title: "Slusalice",
  },
  {
    href: "#",
    image: desktopPc,
    title: "Desktop racunari",
  },
  {
    href: "#",
    image: monitors,
    title: "Monitori",
  },
  {
    href: "#",
    image: kitchen,
    title: "Mali kuhinjski aparati",
  },
  {
    href: "#",
    image: tvs,
    title: "Televizori",
  },
  {
    href: "#",
    image: house,
    title: "Kucni aparati",
  },
  {
    href: "#",
    image: airCondition,
    title: "Klima uredjaji i oprema",
  },
  {
    href: "#",
    image: smartphones,
    title: "Mobilni telefoni i oprema",
  },
  {
    href: "#",
    image: lawnmowers,
    title: "Kosilice",
  },
  {
    href: "#",
    image: fans,
    title: "Ventilatori",
  },
];

export const brands = [
  {
    logo: apple,
    name: "Apple",
  },
  {
    logo: beko,
    name: "Beko",
  },
  {
    logo: bosch,
    name: "Bosch",
  },
  {
    logo: gorenje,
    name: "Gorenje",
  },
  {
    logo: hisense,
    name: "Hisense",
  },
  {
    logo: lg,
    name: "LG",
  },
  {
    logo: lenovo,
    name: "Lenovo",
  },
  {
    logo: logitech,
    name: "Logitech",
  },
  {
    logo: miele,
    name: "Miele",
  },
  {
    logo: philips,
    name: "Philips",
  },
];

export const featuredProductCategories = [
  "Laptop racunari",
  "Televizori",
  "Mobilni telefoni",
  "Oprema za racunare",
  "Espresso aparati",
  "Inverter klime",
];

export const featuredlaptops = [
  {
    image: macbookAir,
    href: "#",
    title: "Apple Macbook Air 13.6 M4 16/256GB Midnight...",
    price: "154.999",
  },
  {
    image: hp,
    href: "#",
    title: "HP 17-cp2021nm R5/16/512GB 9S2B4EA",
    price: "69.999",
  },
  {
    image: asusTuf,
    href: "#",
    title: "ASUS TUF Gaming A16 FA607NU-RL059...",
    price: "129.999",
  },
  {
    image: lenovo,
    href: "#",
    title: "LENOVO IdeaPad S5 13ARP10 R5/16/512 83J2001EYA",
    price: "84.999",
  },
];

export const featuredTvs = [
  {
    image: haier,
    href: "#",
    title: "HAIER H55K800UX 4K Ultra HD Televizor",
    price: "47.999",
  },
  {
    image: samsungTv,
    href: "#",
    title: "SAMSUNG UE55DU8072UXXH DU8000 Crystal 4K Ultra HD...",
    price: "67.999",
  },
  {
    image: tcl,
    href: "#",
    title: "TCL 55C655 QLED 4K Ultra HD Televizor",
    price: "49.999",
  },
  {
    image: philipsTv,
    href: "#",
    title: "PHILIPS 43PUS8009/12 4K Ultra HD Ambilight Televizor",
    price: "37.999",
  },
];

export const featuredSmartphones = [
  {
    image: xiaomi,
    href: "#",
    title: "XIAOMI 14T Pro 12/512GB Blue",
    price: "79.999",
  },
  {
    image: iphone,
    href: "#",
    title: "APPLE iPhone 16 8/128GB Pink MYEA3SX/A",
    price: "114.999",
  },
  {
    image: honor,
    href: "#",
    title: "HONOR X6b 4/128GB Forest Green",
    price: "9.999",
  },
  {
    image: samsungPhone,
    href: "#",
    title: "SAMSUNG Galaxy S24FE 8/256GB Graphite",
    price: "71.999",
  },
];

export const featuredEquipment = [
  {
    image: marvoKeyboard,
    href: "#",
    title: "MARVO KG933G US Saber 61 Žičana gejming tastatura",
    price: "5.499",
  },
  {
    image: logitechMouse,
    href: "#",
    title: "LOGITECH G Pro 2 Lightspeed Pink Gejming bežični miš",
    price: "18.599",
  },
  {
    image: asusRogKeyboard,
    href: "#",
    title: "ASUS ROG Azoth US White Tastatura",
    price: "30.999",
  },
  {
    image: redragonCamera,
    href: "#",
    title: "REDRAGON GW600 Fobos Web kamera",
    price: "3.999",
  },
];

export const featuredEspresso = [
  {
    image: krupsEspresso,
    href: "#",
    title: "KRUPS Dolce Gusto Mini Me KP123H10 Aparat za espresso...",
    price: "9.999",
  },
  {
    image: delonghiEspresso,
    href: "#",
    title: "DELONGHI La Specialista Arte Evo EC9255.T Apar...",
    price: "73.999",
  },
  {
    image: siemensEspresso,
    href: "#",
    title: "SIEMENS TQ903R09 Aparat za espresso kafu",
    price: "173.999",
  },
  {
    image: mieleEspresso,
    href: "#",
    title: "MIELE CM 5510 125 Aparat za espresso kafu Obsidian Black",
    price: "116.999",
  },
];

export const featuredAirConditioners = [
  {
    image: hisenseAirConditioner,
    href: "#",
    title: "HISENSE Energy Pro X Black 12K QH35XV3BG Klima uređaj",
    price: "72.999",
  },
  {
    image: tclAirConditioner,
    href: "#",
    title: "TCL TAC-12CHSD/TPH11I Inverter klima uređaj",
    price: "46.999",
  },
  {
    image: greeAirConditioner,
    href: "#",
    title: "GREE EcoPuls Pular 18k Inverter klima uređaj",
    price: "94.999",
  },
  {
    image: hisense2AirConditioner,
    href: "#",
    title: "HISENSE KE35MR0EG Hi-Comfort 12K Inverter klima uređaj",
    price: "49.999",
  },
];

export const blogCards = [
  {
    image: appliances,
    title: "Megatron preporuka bele tehnike",
    description:
      "Gigatron je jedan od vodećih maloprodajnih lanaca na tržištu tehnike u Srbiji, koji skoro dve decenije obezbeđuje potrošačima vrhunsku ponudu bele...",
  },
  {
    image: kitchenware,
    title: "Megatron preporuka malih kucnih aparata",
    description:
      "Gigatron je jedan od vodećih maloprodajnih lanaca na tržištu tehnike u Srbiji, koji skoro dve decenije obezbeđuje potrošačima vrhunski asortiman...",
  },
  {
    image: insurance,
    title: "SAVA osiguranje uredjaja",
    description:
      "SAVA OSIGURANJE i GIGATRON su uvek uz vas! Pripremili smo za vas posebnu ponudu koja podrazumeva osiguranje električnih i elektronskih...",
  },
];

export const featuredBrandCards = [
  {
    logo: samsungLogo,
    title: "Zakoraci u Samsung e-svet",
    href: "#",
    image: samsungImage,
    background: "bg-[#d7e9dc]",
  },
  {
    logo: appleLogo,
    title: "Besprekorno iskustvo u svakom uredjaju",
    href: "#",
    image: appleImage,
    background: "bg-[#d2dadf]",
  },
];

export const triggers = [
  {
    title: "Playstation 5",
  },
  {
    title: "Playstation 4",
  },
  {
    title: "Xbox",
  },
  {
    title: "PC",
  },
];

export const gamesPS5 = [
  {
    thumbnail: fifa,
    href: "#",
    alt: "FIFA 25",
  },
  {
    thumbnail: ghostOfTsushima,
    href: "#",
    alt: "Ghost of Tsushima",
  },
  {
    thumbnail: horizonForbiddenWest,
    href: "#",
    alt: "Horizon Forbidden West",
  },
];

export const gamesPS4 = [
  {
    thumbnail: fifa,
    href: "#",
    alt: "FIFA 25",
  },
  {
    thumbnail: starWars,
    href: "#",
    alt: "Star Wars",
  },
  {
    thumbnail: ghostbusters,
    href: "#",
    alt: "Ghostbusters",
  },
];

export const gamesXbox = [
  {
    thumbnail: fifa,
    href: "#",
    alt: "FIFA 25",
  },
  {
    thumbnail: crash,
    href: "#",
    alt: "Crash",
  },
  {
    thumbnail: codMW3,
    href: "#",
    alt: "Call of Duty MW3",
  },
];

export const gamesPC = [
  {
    thumbnail: cyberpunk,
    href: "#",
    alt: "Cyberpunk",
  },
  {
    thumbnail: nfsUnbound,
    href: "#",
    alt: "Need for Speed Unbound",
  },
  {
    thumbnail: pharaoh,
    href: "#",
    alt: "Total War: Pharaoh",
  },
];

export const socialIcons = [
  {
    image: facebook,
    href: "#",
    alt: "Facebook",
  },
  {
    image: x,
    href: "#",
    alt: "X",
  },
  {
    image: youtube,
    href: "#",
    alt: "YouTube",
  },
  {
    image: instagram,
    href: "#",
    alt: "Instagram",
  },
];
