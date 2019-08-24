import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import currentTemplate from './currentTemplate'
import currentFeatures from './currentFeatures'
import matches from './matches'

const reducer = combineReducers({
  user,
  currentTemplate,
  currentFeatures,
  matches
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './currentTemplate'
export * from './currentFeatures'
export * from './matches'
