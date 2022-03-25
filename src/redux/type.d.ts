interface IArticle {
    id: number
    title: string
    body: string
  }
  
  type PokemonState = {
    pokemons: any,
    filteredPokemon: any,
    totalCount: number,
    isLoading: boolean,
    singlePokemon: any,
  }
  
  type ArticleAction = {
    type: any
    payload: any
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction


  interface IPokemon {
    id: string
    img: string
    name: string
    url: string
  }