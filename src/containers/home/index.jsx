import React from 'react'
import { connect } from 'react-redux'
import Tiles from '../../components/tiles'
import Tile from '../../components/tile'

const HomeContainer = ({ tiles }) => (
  <Tiles>
    {tiles.map(tile => (
      <Tile key={tile.id} {...tile} />
    ))}
  </Tiles>
)

const mapStateToProps = ({ tiles: { tiles } }) => ({
  tiles
})

export default connect(mapStateToProps)(HomeContainer)
