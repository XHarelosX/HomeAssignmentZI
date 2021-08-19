import { useContext } from "react";
import { useHistory } from "react-router";
import useInput from "../../Components/Hooks/use-input";
import LoginContext from "../../store/login-context";
import {
  ValidityCheck,
  setCookieTimeInMinutes,
} from "../../Components/UtilitiesFunctions/Utilities";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const loginCtx = useContext(LoginContext);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(ValidityCheck);

  const formSubmitedHandler = (event: React.FormEvent) => {
    event.preventDefault();
    loginCtx.isLoggedIn = true;
    const expireCookieTime = setCookieTimeInMinutes(30);
    document.cookie = `${enteredName}=${enteredName}; expires=${expireCookieTime}; path=/`;
    history.push("./movielist");
  };

  const msg =
    enteredName.length && hasError ? (
      <div className={styles.charMsg}>At list 4 characters</div>
    ) : null;

  let InputClasses = enteredName && hasError ? styles.invalidInput : "";

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formSubmitedHandler}>
        <div>Please enter your username</div>
        <label htmlFor="username">Username: </label>
        <input
          className={InputClasses}
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
