import React from "react";
import styles from "./MovieItem.module.css";

interface Props {
  onClickFunc: (id: any) =>  void
  children: React.ReactNode;
  id: string | number
}

const MovieItem: React.FC<Props> = ({onClickFunc, children, id}) => {
  return <li className={styles.movieLi} onClick={onClickFunc.bind(null, id)}>{children}</li>;
};

export default MovieItem;
