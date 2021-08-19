import styles from "./Header.module.css";

interface Props {
  isLoggedIn: boolean;
}

const Header: React.FC<Props> = ({ isLoggedIn }: Props) => {
  return (
    <header className={styles.header}>
      <div>Star Wars UI API</div>
      {isLoggedIn ? (
        <button className={styles.logoutButton}>Logout</button>
      ) : null}
    </header>
  );
};

export default Header;
