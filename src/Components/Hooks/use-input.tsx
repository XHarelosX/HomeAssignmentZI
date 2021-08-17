import { ChangeEvent, useReducer } from "react";

type State = { value: string; isTouched: boolean };
type valitadeValue = (arg: string) => boolean;
type Action = { type: string; value: string };

const initialInputState = {
  value: "",
  isTouched: false,
};

function inputStateReducer(initialInputState: State, action: Action): State {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: initialInputState.isTouched };
  }

  if (action.type === "BLUR") {
    return { ...initialInputState, isTouched: true };
  }

  return initialInputState;
}

const useInput = (validateValue: valitadeValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "BLUR", value: event.target.value });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
