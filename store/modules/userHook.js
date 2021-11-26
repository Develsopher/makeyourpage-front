import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from ".";
import { loginAction } from "./user";

export default function useUser() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const login = useCallback((data) => {
    dispatch(loginAction(data));
  });

  return { isLoggedIn, login };
}
