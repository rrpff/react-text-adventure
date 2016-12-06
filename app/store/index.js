import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({})
const middlewares = applyMiddleware(thunk)
const store = createStore(reducer, middlewares)

export default store
