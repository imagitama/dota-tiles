import { combineReducers } from 'redux'
import app from './app/reducer'
import tiles from './tiles/reducer'

export default combineReducers({
  app,
  tiles
})
