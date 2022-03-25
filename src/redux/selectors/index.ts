

export const selectPokemons = (state: PokemonState) => state.pokemons.pokemons;
export const selectIsLoading = (state:PokemonState) => state.pokemons.isLoading;
export const selectTotalCount = (state:PokemonState) => state.pokemons.totalCount;
export const selectSinglePokemon = (state:PokemonState) => state.pokemons.singlePokemon;
