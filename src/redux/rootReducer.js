import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import squareWidget from './modules/squareWidget'
import textWidgets from './modules/textWidgets'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  counter,
  squareWidget,
  textWidgets,
  router,
  form: formReducer
})
