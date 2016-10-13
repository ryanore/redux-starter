import {LOCATION_CHANGE} from '../actions/location'

const initialLocation = window.location || { pathname: '/', search: '', hash: '' }

export default (state = initialLocation, action) => {
  console.log('r:location ', action);
  return action.type === 'LOCATION_CHANGE' ? action.location : state
}
