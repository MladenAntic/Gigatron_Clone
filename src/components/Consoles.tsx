import { gamesPC, gamesPS4, gamesPS5, gamesXbox, triggers } from "@/constants";
import { MaxContainer } from "./shared/MaxContainer";
import { useState } from "react";
import { CardContainer, CardItem } from "../components/ui/3d-card";
import { GameProps, TabProps } from "@/types";

const Tab = ({ title, onClick, active, index }: TabProps) => (
  <button
    onClick={onClick}
    className={`flex-center flex-1 cursor-pointer rounded-md bg-[#526bbf] py-2 text-lg text-white transition-colors duration-200 hover:opacity-80 ${active === index && "bg-white text-black! hover:opacity-100"} max-sm:w-full max-sm:text-sm`}
  >
    {title}
  </button>
);

const Game = ({ thumbnail, href }: GameProps) => (
  <CardContainer className="h-[14.5rem] w-[11.5rem] max-sm:mb-[-4.6875rem] max-sm:size-fit">
    <CardItem rotateX={20} rotateY={20}>
      <a
        href={href}
        className="transition-all duration-200 hover:shadow-lg hover:shadow-black"
      >
        <img src={thumbnail} className="size-full object-cover" />
      </a>
    </CardItem>
  </CardContainer>
);

export const Consoles = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="mb-15 px-2.5">
      <MaxContainer
        className={`flex flex-col gap-20 rounded-xl bg-gradient-to-b from-[#183aaa] to-[#103fe7] p-8 ${active === 0 && "bg-gradient-to-b from-[#183aaa] to-[#103fe7]"} ${active === 1 && "bg-blue-500"} ${active === 2 && "bg-green-500"} ${active === 3 && "bg-black"} transition-colors duration-200`}
      >
        <div className="flex-center gap-1 max-sm:flex-col">
          {triggers.map((trigger, index) => (
            <Tab
              key={trigger.title}
              title={trigger.title}
              onClick={() => setActive(index)}
              index={index}
              active={active}
            />
          ))}
        </div>

        <div className="flex-between max-lg:flex-center px-10 max-lg:flex-col max-sm:px-5">
          <div className="max-lg:text-center">
            <h2 className="mb-4 text-4xl font-semibold text-white max-sm:text-2xl">
              {active === 0 && (
                <>
                  Najmocnije <br className="max-lg:hidden" /> next gen{" "}
                  <br className="max-lg:hidden" /> konzole!
                </>
              )}
              {active === 1 && (
                <>
                  Najmocnije <br className="max-lg:hidden" /> next gen{" "}
                  <br className="max-lg:hidden" /> konzole!
                </>
              )}
              {active === 2 && (
                <>
                  Najmocnije <br className="max-lg:hidden" /> next gen{" "}
                  <br className="max-lg:hidden" /> konzole!
                </>
              )}
              {active === 3 && (
                <>
                  <b>PC</b> <br className="max-lg:hidden" /> Po meri{" "}
                  <br className="max-lg:hidden" /> svakog{" "}
                  <br className="max-lg:hidden" /> gejmera!
                </>
              )}
            </h2>
            <p className="mb-8 font-medium text-white max-sm:text-sm">
              {active === 0 && (
                <>
                  PS5 prikazuje igre u 8K rezoluciji i{" "}
                  <br className="max-lg:hidden" /> dolazi sa DualSense
                  džojstikom.
                </>
              )}
              {active === 1 && (
                <>
                  PS4 ima snažnu konfiguraciju, uz igre u{" "}
                  <br className="max-lg:hidden" /> 4K rezoluciji.
                </>
              )}
              {active === 2 && (
                <>
                  Vodeća konzola za novu generaciju{" "}
                  <br className="max-lg:hidden" /> igara, sa brojnim
                  unapređenjima.
                </>
              )}
              {active === 3 && (
                <>
                  Snažniji procesor, jača grafička i druge{" "}
                  <br className="max-lg:hidden" /> unapređene komponente.
                </>
              )}
            </p>
            <a
              href="#"
              className="hover:bg-gray max-xs:p-2 max-xs:text-sm rounded-md bg-white p-3 transition-colors duration-200"
            >
              Pogledajte igrice
            </a>
          </div>

          <div className="flex-center gap-2 max-sm:flex-col max-sm:gap-0">
            {active === 0 && (
              <>
                {gamesPS5.map((game) => (
                  <Game key={game.alt} {...game} />
                ))}
              </>
            )}
            {active === 1 && (
              <>
                {gamesPS4.map((game) => (
                  <Game key={game.alt} {...game} />
                ))}
              </>
            )}
            {active === 2 && (
              <>
                {gamesXbox.map((game) => (
                  <Game key={game.alt} {...game} />
                ))}
              </>
            )}
            {active === 3 && (
              <>
                {gamesPC.map((game) => (
                  <Game key={game.alt} {...game} />
                ))}
              </>
            )}
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};
