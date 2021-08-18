import { useContext } from "react";
import { useHistory } from "react-router";
import useInput from "../../Components/Hooks/use-input";
import LoginContext from "../../store/login-context";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const history = useHistory();
  const authCtx = useContext(LoginContext);

  const setCookieTimeInMinutes = (minutes: number) => {
    let now = new Date();
    now.setTime(now.getTime() + minutes * 60 * 1000);
    const time = now.toUTCString();
    return time;
  };

  const ValidityCheck = (value: string) => {
    if (value.trim().length > 3) return true;
    return false;
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(ValidityCheck);

  const msg = enteredName.length ? (
    <div className={styles.charMsg}>At list 4 characters</div>
  ) : null;

  const formSubmitedHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const time = new Date().toISOString();

    authCtx.login(`${enteredName} - ${time}`);
    authCtx.isLoggedIn = true;

    const expireCookieTime = setCookieTimeInMinutes(30);

    document.cookie = `${enteredName}=${enteredName}; expires=${expireCookieTime}; path=/`;

    history.replace("./movielist");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formSubmitedHandler}>
        <div>Please enter your username</div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {msg}
        <button disabled={!enteredNameIsValid} onClick={formSubmitedHandler}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
