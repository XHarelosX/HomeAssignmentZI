import { useContext } from "react";
import LoginContext from "../../store/login-context";
import styles from "./Header.module.css";

interface Props {
  logoutBtnHandler: () => void;
}

const Header: React.FC<Props> = ({ logoutBtnHandler }: Props) => {
  const loginCtx = useContext(LoginContext);
  const isLoggedIn = loginCtx.isLoggedIn;

  return (
    <header className={styles.header}>
      <div>Star Wars UI API</div>
      {isLoggedIn && (
        <button className={styles.logoutButton} onClick={logoutBtnHandler}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
