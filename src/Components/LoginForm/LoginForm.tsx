import styles from "./LoginForm.module.css";
interface Props {}

const LoginForm = (props: Props) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div>Please enter your username</div>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default LoginForm;
