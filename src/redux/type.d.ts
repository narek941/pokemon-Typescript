  interface IPokemon {
    id: number 
    img: string
    name: string
    url: string
  }
  
  type PokemonState = {
    pokemons: IPokemon[] | [],
    isLoading: boolean,
    error:string
  }
  
  type PokemonData={
  count:number| null,
  next:string | null,
  previous:string | null,
  results: any,
  }
