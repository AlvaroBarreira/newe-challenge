export interface PokemonContextType {
  offSet: number;
  setOffSet: (offSet: number) => void;
  pokemonList: array<Record<PokemonListType, unknown>>;
  setPokemonList: (pokemonList: pokemonList) => void;
  pokemonCardData: Record<PokemonCardDataType>;
  setPokemonCardData: (pokemonCarData: pokemonCardData) => void;
  count: number;
  setCount: (count: count) => void;
  name: string;
  setName: (name: name) => void;
}

export interface PokemonListType {
  name: string;
  url: string;
}

export type PokemonCardDataType = {
  name?: string | undefined;
  base_experience: number;
  abilities: Array<Record<string, unknown>>;
  id: number;
  sprites: any;
};
