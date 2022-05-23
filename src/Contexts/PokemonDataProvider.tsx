import React from "react";
import {createContext, useState} from "react";

import ChildrenProps from "../@Types/children";
import {PokemonCardDataType, PokemonContextType} from "../@Types/pokemon";

export const PokemonDataContext = createContext<PokemonContextType | null>(null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PokemonDataProvider = ({children}: ChildrenProps) => {
  const [count, setCount] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [name, setName] = useState("");
  const [pokemonCardData, setPokemonCardData] = useState<PokemonCardDataType>({
    name: "",
    base_experience: 0,
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    id: 0,
    sprites: "",
  });
  const [pokemonList, setPokemonList] = useState([]);

  const data = {
    offSet,
    setOffSet,
    pokemonList,
    setPokemonList,
    pokemonCardData,
    setPokemonCardData,
    count,
    setCount,
    name,
    setName,
  };

  return <PokemonDataContext.Provider value={data}>{children}</PokemonDataContext.Provider>;
};

export default PokemonDataProvider;
