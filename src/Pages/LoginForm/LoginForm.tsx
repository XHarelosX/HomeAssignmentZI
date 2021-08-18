import { useContext } from "react";
import { useHistory } from "react-router";
import useInput from "../../Components/Hooks/use-input";
import LoginContext from "../../store/login-context";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const history = useHistory();
  const authCtx = useContext(LoginContext);

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
    authCtx.login(`${enteredName} - ${new Date().toISOString()}`);
    authCtx.isLoggedIn = true;
    localStorage.setItem("username", enteredName);
    history.push("./movielist");
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
