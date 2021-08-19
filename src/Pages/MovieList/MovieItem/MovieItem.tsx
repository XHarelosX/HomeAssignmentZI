import styles from "./MovieItem.module.css";

interface Props {
  children: React.ReactNode;
}

const MovieItem: React.FC<Props> = (props: Props) => {
  return <li className={styles.movieLi}>{props.children}</li>;
};

export default MovieItem;
