import * as ActionTypes from '../actions'
import merge from 'lodash'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function goals(state = { goals: {}}, action) {
  if (action.response && action.response.goals) {
    return merge({}, state, action.response.goals)
  }
  return state
}


function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}


const rootReducer = combineReducers({
  goals,
  errorMessage,
  routing
})
export default rootReducer
