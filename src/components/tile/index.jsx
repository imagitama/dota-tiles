import React from 'react'
import Draggable from 'react-draggable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'
import {
  dragTile as dragTileAction,
  moveTile as moveTileAction
} from '../../ducks/tiles/actions'

const TileStyled = styled.div`
  width: 84px;
  height: 48px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ isDragging, isBeingDragged }) =>
    isDragging && isBeingDragged ? 1 : isDragging ? 0.5 : 1};
  z-index: ${({ isBeingDragged }) => (isBeingDragged ? 1000 : 1)};
  border: 0.2rem outset #7f7f7f;
  background-size: cover;
`

const Tile = ({
  id,
  heroName,
  x,
  y,
  dragX,
  dragY,
  moveTile,
  dragTile,
  isDragging
}) => (
  <Draggable
    onStop={(event, data) => moveTile(id, data.lastX, data.lastY)}
    onDrag={(event, data) => dragTile(id, data.x, data.y)}
    position={{
      x,
      y
    }}
    grid={[5, 5]}
    bounds="parent">
    <TileStyled
      isDragging={isDragging}
      isBeingDragged={dragX !== null || dragY !== null}
      style={{
        backgroundImage: `url(/assets/images/heroes/${heroName}.png)`
      }}
    />
  </Draggable>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dragTile: dragTileAction,
      moveTile: moveTileAction
    },
    dispatch
  )

const mapStateToProps = ({ tiles: { isDragging } }) => ({ isDragging })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile)
