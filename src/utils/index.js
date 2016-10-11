export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}

/**
 * Logic for deciding if user is an admin
 * @param  {Object} user Session User
 * @return {Boolean}      Is the user logged in and admin?
 */
export const isAdmin = (session) => {
  if(!session.user) {
    return false;
  }
  if(!session.user.role === 'admin') {
    return false;
  }
  return true;
};
