import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import game from '../reducers/game'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const reducer = combineReducers({ game })
const middlewares = applyMiddleware(thunk, logger)
const store = createStore(reducer, middlewares)

export default store
