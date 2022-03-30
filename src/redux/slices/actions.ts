import axios from "axios";
import { pokemonSlice } from "./pokemonSlice";
import * as constants from "../../constants";
import { AppDispatch } from "..";
import { IPokemon, PokemonData, Results } from "../types";

export const getPokemons =
  (limit: number = 25, offset: number = 0) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(pokemonSlice.actions.pokemonFetching());
      const { data } = await axios.get<PokemonData>(
        `${constants.baseUrl}pokemon/?limit=${limit}&offset=${offset}`
      );

      const pokemon: IPokemon[] = data.results.map((item: Results) => {
        return {
          name: item.name,
          url: item.url,
          id: Number(item.url.split("/")[6]),
          img: `${constants.imgUrl}${item.url.split("/")[6]}.png`,
        };
      });
      dispatch(pokemonSlice.actions.pokemonFetchingSuccess(pokemon));
    } catch (error: any) {
      dispatch(pokemonSlice.actions.pokemonFetchingError(error.message));
    }
  };
