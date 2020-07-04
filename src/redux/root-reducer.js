import { combineReducers } from 'redux'
import connections from './connections/reducer'


const rootReducers = (
  combineReducers(
    connections
  )
)

export default rootReducers