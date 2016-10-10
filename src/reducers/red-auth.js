const INITIAL_STATE = {
  user: null,
  access_token: null,
  loggedIn: true,
  isAuthenticating: false,
  statusText: null,
  verified: true
};

export default function AuthReducer(state = INITIAL_STATE, action) {

  let payload = action.payload;

  switch (action.type) {
    default:
      return state;
  }
}
