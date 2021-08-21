import styles from "./Header.module.css";

interface Props {
  isLoggedIn: boolean;
  logoutBtnHandler: () => void;
}

const Header: React.FC<Props> = ({ isLoggedIn, logoutBtnHandler }: Props) => {
  return (
    <header className={styles.header}>
      <div>Star Wars UI API</div>
      {isLoggedIn ? (
        <button className={styles.logoutButton} onClick={logoutBtnHandler}>
          Logout
        </button>
      ) : null}
    </header>
  );
};

export default Header;
