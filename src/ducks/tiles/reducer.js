import { DRAG_TILE, MOVE_TILE } from './actions'
import {
  default as allHeroes,
  categories as heroCategories
} from '../../heroes'
import { TILE_WIDTH, TILE_HEIGHT } from '../../constants'

const mapIntoTileFormat = ({ oldHeroName, category }) => ({
  id: oldHeroName,
  heroName: oldHeroName,
  category,
  x: null,
  y: null,
  dragX: null,
  dragY: null
})

const createTilesByCategory = (category, categoryIdx) => {
  const tilesInCategory = allHeroes.filter(
    ({ category: categoryUnderTest }) => categoryUnderTest === category
  )

  let xIdx = 0
  let y = TILE_HEIGHT * 7 * categoryIdx

  const heroTiles = tilesInCategory.map(mapIntoTileFormat)

  for (let i = 0; i < heroTiles.length; i++) {
    heroTiles[i] = {
      ...heroTiles[i],
      x: TILE_WIDTH * xIdx,
      y
    }

    //xIdx++
    if ((i + 1) % 7 === 0) {
      xIdx = 0
      y = y + TILE_HEIGHT
    } else {
      xIdx++
    }
  }

  return heroTiles
}

const createTiles = () =>
  [heroCategories.str, heroCategories.agi, heroCategories.int].reduce(
    (tiles, categoryName, idx) => {
      return tiles.concat(createTilesByCategory(categoryName, idx))
    },
    []
  )

const initialState = {
  tiles: createTiles(),
  isDragging: false
}

const changeTilesWithDragging = (tiles, tileId, dragX, dragY) =>
  tiles.map(tile => {
    if (tile.id === tileId) {
      return {
        ...tile,
        dragX,
        dragY
      }
    }
    return tile
  })

const changeTilesWithMoving = (tiles, tileId, newX, newY) =>
  tiles.map(tile => {
    if (tile.id === tileId) {
      return {
        ...tile,
        dragX: null,
        dragY: null,
        x: newX,
        y: newY
      }
    }
    return tile
  })

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAG_TILE:
      return {
        ...state,
        tiles: changeTilesWithDragging(
          state.tiles,
          action.payload.tileId,
          action.payload.dragX,
          action.payload.dragY
        ),
        isDragging: true
      }

    case MOVE_TILE:
      return {
        ...state,
        tiles: changeTilesWithMoving(
          state.tiles,
          action.payload.tileId,
          action.payload.newX,
          action.payload.newY
        ),
        isDragging: false
      }

    default:
      return state
  }
}
