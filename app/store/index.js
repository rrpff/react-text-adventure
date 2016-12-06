import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import game from '../reducers/game'

const reducer = combineReducers({ game })
const middlewares = applyMiddleware(thunk)
const store = createStore(reducer, middlewares)

export default store
