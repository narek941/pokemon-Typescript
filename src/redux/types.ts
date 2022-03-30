export interface IPokemon {
  id: number;
  img: string;
  name: string;
  url: string;
}

export type PokemonState = {
  pokemons: IPokemon[] | [];
  isLoading: boolean;
  error: string;
};

export type Results = {
  name: string;
  url: string;
};

export type PokemonData = {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Results[];
};
