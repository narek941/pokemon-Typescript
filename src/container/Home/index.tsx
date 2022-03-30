import React, { useEffect } from "react";

import { Header, PokemonList } from "../../components";
import styles from "./Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getPokemons } from "../../redux/slices/actions";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector(
    (state) => state.pokemonReducer
  );

  useEffect(() => {
    dispatch(getPokemons(300, 0));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Header />
      <PokemonList pokemons={pokemons} isLoading={isLoading} />
    </div>
  );
};

export default Home;
