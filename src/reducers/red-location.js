import {LOCATION_CHANGE} from '../actions/location'

const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
