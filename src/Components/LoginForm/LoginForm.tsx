import styles from "./LoginForm.module.css";
import useInput from "../Hooks/use-input";

const LoginForm = () => {
  const ValidityCheck = (value: string) => {
    if (value.trim().length > 3) return true;
    return false;
  };

  const formSubmitedHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(ValidityCheck);

  const msg = enteredName.length ? (
    <div className={styles.charMsg}>At list 3 characters</div>
  ) : null;

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formSubmitedHandler}>
        <div>Please enter your username</div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        {msg}
        <button disabled={!enteredNameIsValid}>Continue</button>
      </form>
    </div>
  );
};

export default LoginForm;
