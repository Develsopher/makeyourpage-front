export const INIT_USER_EMAIL = "auth/INIT_USER_EMAIL";

export const setUserEmail = (payload) => {
  return {
    type: INIT_USER_EMAIL,
    payload,
  };
};
export const authActions = { setUserEmail };

const initialState = {
  userEmail: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_USER_EMAIL:
      const newState = { ...state, userEmail: action.payload };
      return newState;
    default:
      return state;
  }
}
