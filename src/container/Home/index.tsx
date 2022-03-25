import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemonActions";
import { selectPokemons, selectIsLoading } from "../../redux/selectors";

import { Header, PokemonList } from "../../components";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons: IPokemon[] = useSelector(selectPokemons);
  const isLoading: boolean = useSelector(selectIsLoading);

  const offset: number = 300;

  useEffect(() => {
    dispatch(getPokemons(offset, 0));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <PokemonList pokemons={pokemons} isLoading={isLoading} />
    </div>
  );
};

export default Home;
