import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import root from './root-reducer'

const middlewares = applyMiddleware(logger);

const store = createStore(
  root,
  middlewares
)

export default store;
