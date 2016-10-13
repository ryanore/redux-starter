import { checkHttpStatus, parseJSON} from '../utils';
// import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import 'isomorphic-fetch';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESSFUL = 'LOGOUT_USER_SUCCESSFUL';
export const USER_AUTH_VERIFIED = 'USER_AUTH_VERIFIED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';

/**
 * Action : make request to API to reset password
 * @param  {String} email User's associated email
 * @return {promise} Object with message payload
 */
export function resetPassword(un, redirect = '/login') {
  return (dispatch) => {
    let request = fetch('http://localhost:3001/users/forgotpassword',{
      method: 'post',
      body: JSON.stringify({username: un}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(push(redirect));
      return {
        type: RESET_PASSWORD_SUCCESS
      };
    })
    .catch(ex => {
      return {
        type: RESET_PASSWORD_FAILURE
      };
    });
  };
}

/**
 * Login form submitted
 * @param  {String} un username
 * @param  {String} pw password
 * @param  {String}  redirect = "/" Optionally redirect to specific url
 * @return {Promise}
 */
export function logInUser(un, pw, redirect = '/') {
  return (dispatch) => {
    return fetch('http://localhost:3001/session/',{
      method: 'post',
      body: JSON.stringify({username: un, password: pw}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(loginUserSuccess(json.access_token));
      // dispatch(push(redirect));
    })
    .catch(ex => {
      dispatch(loginUserFailure(ex));
    });
  };
}



/**
 * Making login network request
 * @return {Object}
 */
export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  };
}


/**
 * User was successfully logged in - from logInUser()
 * Or
 * User already is logged in - from verifyUserToken()
 * @param  {Object} access_token JWT form server
 * @return {Object}
 */
export function loginUserSuccess(access_token) {
  console.log('login success!');
  let decoded = jwtDecode(access_token);
  localStorage.setItem('access_token', access_token);

  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      access_token: access_token,
      user: decoded
    }
  };
}


/**
 * User Failed Login - state modified
 * If they have an access_token remove it
 * @param  {Object} error
 * @return {Object} error info
 */
export function loginUserFailure(error) {
  console.log('login fail');
  localStorage.removeItem('access_token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
}


/**
 * User's token has been verified as good or bad
 * If it's not valid remove any token, if it is, consider them logged in
 * @param  {Object} error
 * @return {Object} error info
 */
export function userAuthVerified(validToken) {
  console.log('verified!');
  if( typeof validToken !== 'string'  ){
    localStorage.removeItem('access_token');
  }

  return {
    type: 'USER_AUTH_VERIFIED'
  };
}


/**
 * Make Auth Request to verify the access_token
 * from localStorage
*/
export function verifyUserToken() {
  console.log('verifying...');
  let access_token = localStorage.getItem('access_token');

  return (dispatch) => {
    if (!access_token) {
      return dispatch(userAuthVerified(false));
    }
    return fetch('http://localhost:3001/session/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(loginUserSuccess(json.access_token));
      dispatch(userAuthVerified(json.access_token));
    })
    .catch(ex => {
      dispatch(userAuthVerified(false));
    });
  };
}


/**
 * Remove token and dispatch message to update state.
 * @return {[type]} [description]
 */
export function logout() {
  console.log('logout');
  localStorage.removeItem('access_token');
  return {
    type: LOGOUT_USER_SUCCESSFUL
  };
}


/**
 * Dispatch the login action and redirect
 * @return {[type]} [description]
 */
export function logOutUserRequest() {
  console.log('logout requested');
  return (dispatch, state) => {
    dispatch(logout());
    // dispatch(push('/login'));
  };
}
