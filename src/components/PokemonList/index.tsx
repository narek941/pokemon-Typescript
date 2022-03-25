import React from "react";
import { PokemonItem } from "../index";
import styles from "./PokemonList.module.scss";
import loader from "../../assets/img/loading.gif";

const PokemonList: React.FC<any> = ({ pokemons, isLoading }) => {
  const pokemonRender: any = pokemons?.map((item: any) => {
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
