import axios, {AxiosResponse} from "axios";

import {PokemonDataContext} from "../Contexts/PokemonDataProvider";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPokemons = async (
  offSet: number,
  setPokemonList: (pokemonList: typeof PokemonDataContext[]) => void,
  setCount: (count: number) => void,
) => {
  const POKEMONS_API_SERVER = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=10`;

  try {
    const response = await axios.get(`${POKEMONS_API_SERVER}`);

    setCount(response.data.count);
    setPokemonList(response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
