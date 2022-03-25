import React from "react";

import styles from "./PokemonItem.module.scss";
interface IPokemonItemProps {
  id: number;
  img: string;
  name: string;
}
const PokemonItem: React.FC<IPokemonItemProps> = ({ id, img, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <span>{name}</span>
        <img src={img} alt="s" />
      </div>
    </div>
  );
};

export default PokemonItem;
