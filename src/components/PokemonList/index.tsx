import React, { ReactElement } from "react";
import { PokemonItem } from "../index";
import styles from "./PokemonList.module.scss";
import loader from "../../assets/img/loading.gif";
import { IPokemon } from "../../redux/types";
interface IPokemonListProps {
  pokemons: IPokemon[];
  isLoading: boolean;
}

const PokemonList: React.FC<IPokemonListProps> = ({ pokemons, isLoading }) => {
  const pokemonRender = pokemons?.map((item: IPokemon): ReactElement => {
    return (
      <PokemonItem key={item.id} id={item.id} img={item.img} name={item.name} />
    );
  });

  return isLoading ? (
    <img src={loader} alt="Logo" />
  ) : (
    <div className={styles.container}>{pokemonRender}</div>
  );
};

export default PokemonList;
