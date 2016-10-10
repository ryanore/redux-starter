//
//  Constants
//

export const UPDAT_FOO = 'UPDAT_FOO'

//
//  Actions
//

export function updateFoo (arg) {
  return {
    type    : UPDAT_FOO,
    payload : {
      foo: arg
    }
  }
}


//
//  Thunks
//
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}
