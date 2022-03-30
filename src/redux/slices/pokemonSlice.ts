import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon, PokemonState } from "../types";

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
  error: "",
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    pokemonFetching(state) {
      state.isLoading = true;
    },
    pokemonFetchingSuccess(state, action: PayloadAction<IPokemon[]>) {
      state.isLoading = false;
      state.error = "";
      state.pokemons = action.payload;
    },
    pokemonFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pokemonSlice.reducer;
