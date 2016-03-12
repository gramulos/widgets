import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import squareWidget from './modules/squareWidget'

export default combineReducers({
  counter,
  squareWidget,
  router
})
