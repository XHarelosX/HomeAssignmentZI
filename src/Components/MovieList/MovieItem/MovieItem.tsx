import React, { useContext } from "react";
import SvgStar from "../../Svg/StarIcon";
import styles from "./MovieItem.module.css";
import LoginContext from "../../../store/login-context";

interface Props {
  DisplayMovieInfoOnClick: (id: any) => void;
  AddMovieToFavoritesOnClick: (id: any) => void;
  children: React.ReactNode;
  id: string | number;
}

const MovieItem: React.FC<Props> = ({ DisplayMovieInfoOnClick, AddMovieToFavoritesOnClick, children, id }) => {
  const loginCtx = useContext(LoginContext);
  console.log(loginCtx.token)

  return (
    <li className={styles.movieLi} >
      <div onClick={DisplayMovieInfoOnClick.bind(null, id)}>{children}</div>
      <div className={styles.starIcon} onClick={AddMovieToFavoritesOnClick.bind(null, id)}>
        <SvgStar />
      </div>
    </li>
  );
};

export default MovieItem;