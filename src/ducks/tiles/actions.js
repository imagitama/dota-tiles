export const DRAG_TILE = 'DRAG_TILE'
export const dragTile = (tileId, dragX, dragY) => ({
  type: DRAG_TILE,
  payload: {
    tileId,
    dragX,
    dragY
  }
})

export const MOVE_TILE = 'MOVE_TILE'
export const moveTile = (tileId, newX, newY) => ({
  type: MOVE_TILE,
  payload: {
    tileId,
    newX,
    newY
  }
})
