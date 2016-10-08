import {UPDATE_FOO} from '../actions/act-foo'

const initialState = null
export default function fooReducer (state = initialState, action) {
  return action.type === UPDATE_FOO
    ? action.payload
    : state
}
