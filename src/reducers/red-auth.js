const INITIAL_STATE = {
  user: null,
  access_token: null,
  loggedIn: false,
  isAuthenticating: false,
  statusText: null,
  verified: false
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  let payload = action.payload;

  switch (action.type) {
    default:
      return state;
  }
}
