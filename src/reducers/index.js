import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = () => {
  return combineReducers({
    location: locationReducer
  })
}


export default makeRootReducer
