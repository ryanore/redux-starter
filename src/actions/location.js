export const LOCATION_CHANGE = 'LOCATION_CHANGE'

const defaultLocation =  {
  pathname: '/',
  search: '',
  hash: '',
  query: null
}

export function locationChange (location) {
  return {
    type    : LOCATION_CHANGE,
    location : location
  }
}
