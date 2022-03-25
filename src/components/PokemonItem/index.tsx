import React from "react";

import styles from "./PokemonItem.module.scss";

const PokemonItem: React.FC<any> = ({ id, img, name }) => {
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
