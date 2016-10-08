import { combineReducers } from 'redux'
import locationReducer from './red-location'
import authReducer from './red-auth'
import fooReducer from './red-foo'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    session: authReducer
  })
}


export default makeRootReducer
