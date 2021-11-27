import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../store/modules/counter";
import * as userActions from "../store/modules/user";

export default function Test() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);

  const email = useSelector(({ user }) => user.email);

  // const email = useSelector(({ users }) => users.email);
  const plus = useCallback(
    ({ value }) => {
      dispatch(counterActions.increment({ value }));
    },
    [dispatch]
  );
  const minus = useCallback(
    ({ value }) => {
      dispatch(counterActions.decrement({ value }));
    },
    [dispatch]
  );
  // console.log("email", email);
  const handleInput = (e) => {
    dispatch(userActions.setEmail(e.target.value));
  };
  return (
    <div>
      {" "}
      <h1>Counter</h1> <button onClick={() => minus({ value })}>-</button>{" "}
      <span>{value}</span> <button onClick={() => plus({ value })}>+</button>{" "}
      <p>{email}</p>
      <input value={email} onChange={handleInput} />
    </div>
  );
}
