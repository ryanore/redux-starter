import { combineReducers } from 'redux'
import locationReducer from './red-location'
import authReducer from './red-auth'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer,
    session: authReducer
  })
}


export default makeRootReducer
