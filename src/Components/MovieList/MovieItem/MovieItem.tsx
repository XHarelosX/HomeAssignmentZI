import SvgStar from "../../Svg/StarIcon";
import styles from "./MovieItem.module.css";

interface Props {
  DisplayMovieInfoOnClick: (id: any) => void;
  AddMovieToFavoritesOnClick: (id: any) => void;
  children: React.ReactNode;
  id: string | number;
  img: string;
}

const MovieItem: React.FC<Props> = ({
  DisplayMovieInfoOnClick,
  AddMovieToFavoritesOnClick,
  children,
  id,
  img,
}) => {
  return (
    <li className={styles.movieLi}>
      <div className={styles.movieTitleAndStar}>
        <div onClick={DisplayMovieInfoOnClick.bind(null, id)}>{children}</div>
        <div
          className={styles.starIcon}
          onClick={AddMovieToFavoritesOnClick.bind(null, id)}
        >
          <SvgStar />
        </div>
      </div>
      <img onClick={DisplayMovieInfoOnClick.bind(null, id)} className={styles.img} src={img} alt="movie Poster" />
    </li>
  );
};

export default MovieItem;
