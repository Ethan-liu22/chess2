import React, { Fragment } from 'react'
import Square from './Square'
import Knight from './Knight'
import './App.css'
import Bishop from './Bishop'
import Rook from './Rook'
import Piece from './Piece'
import Queen from './Queen'
import King from './King'
import Pawn from './Pawn'

function renderSquare(i, [knightX, knightY], [bishopX, bishopY], [rookX, rookY], [queenX, queenY], [kingX, kingY], [pawnX, pawnY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const isBishopHere = x === bishopX && y === bishopY
  const isRookHere = x === rookX && y === rookY
  const isQueenHere = x === queenX && y === queenY
  const isKingHere = x === kingX && y === kingY
  const isPawnHere = x === pawnX && y === pawnY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null
  const piecebishop = isBishopHere ? <Bishop /> : null
  const piecerook = isRookHere ? <Rook /> : null
  const piecequeen = isQueenHere ? <Queen /> : null
  const pieceking = isKingHere ? <King /> : null
  const piecepawn = isPawnHere ? <Pawn /> : null

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Fragment>
        <Piece black={black}>{piecebishop}</Piece>
        <Piece black={black}>{piecerook}</Piece>
        <Piece black={black}>{piecequeen}</Piece>
        <Piece black={black}>{pieceking}</Piece>
        <Piece black={black}>{piecepawn}</Piece>
        <Square black={black}>{piece}</Square>
        
        
        
      </Fragment>
    </div>
  )
}

export default function Board({ knightPosition, bishopPosition, rookPosition, queenPosition, kingPosition, pawnPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, bishopPosition, rookPosition, queenPosition, kingPosition, pawnPosition))
  }


  return (
    <div
      style={{
        marginLeft: 400,
        width: 730,
        height: 730,
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}
