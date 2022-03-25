import axios from "axios";

import * as constants from "../../constants";

import {
  SET_POKEMONS,
  SET_TOTAL_COUNT,
  IS_LOADING,
} from "../reducers/pokemonReducer";

export const getPokemons = (limit: number = 25, offset: number = 0) => {
  return async (dispatch:any) => {

    try {
      dispatch({ type: IS_LOADING, payload: true });
      const { data } : any = await axios.get(
        `${constants.baseUrl}pokemon/?limit=${limit}&offset=${offset}`
      );
      const total:number = data.count;

      const pokemon = data.results.map((item:IPokemon) => ({
        name: item.name,
        url: item.url,
        id: item.url.split("/")[6],
        img: `${constants.imgUrl}${item.url.split("/")[6]}.png`,
      }));

      dispatch({ type: SET_POKEMONS, payload: pokemon });
      dispatch({ type: SET_TOTAL_COUNT, payload: total });
    } catch (error:any) {
      console.log(error.message);
    } finally {
      dispatch({ type: IS_LOADING, payload: false });
    }
  };
};


export const setIsLoad = (bool:boolean) => {
  return {
    type: IS_LOADING,
    payload: bool,
  };
};
