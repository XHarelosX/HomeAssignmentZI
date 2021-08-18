import styles from "./Header.module.css";
interface Props {
  isLoggedIn: boolean;
}
const Header = ({ isLoggedIn }: Props) => {
  return (
    <header className={styles.header}>
      <div>Star Wars UI API</div>
      {isLoggedIn ? <button>Logout</button> : null}
    </header>
  );
};

export default Header;
