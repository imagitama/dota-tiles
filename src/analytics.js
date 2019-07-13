import { MOVE_TILE } from './ducks/tiles/actions'

const allowedActions = [MOVE_TILE]

const analyticsMiddleware = store => next => action => {
  if (window.gtag && allowedActions.includes(action.type)) {
    window.gtag('event', 'action', {
      event_category: action.type,
      event_label: JSON.stringify(action.payload)
    })
  }
  return next(action)
}

export default analyticsMiddleware
