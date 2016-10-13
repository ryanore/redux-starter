import { combineReducers } from 'redux'
import authReducer from './auth'

export const makeRootReducer = () => {
  return combineReducers({
    session: authReducer
  })
}


export default makeRootReducer
