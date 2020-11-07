import React, { useState } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Game, GameConfig, Color } from "24a2"

const GOL = () => {
  const [playing, setPlaying] = useState(false)
  function begin() {
    setPlaying(true)
    game.run()
  }

  return (
    <Layout>
      <Header onBlog={false} />
      <div className="flex flex-col items-center text-textColor font-press-start">
        <div className="inline-block text-center text-3xl md:text-5xl pb-2">
          The Game of Life
        </div>
        {playing ? null : (
          <button
            onClick={begin}
            className="inline-block text-center text-xl md:text-3xl"
          >
            begin
          </button>
        )}
        <div id="game"></div>
      </div>
    </Layout>
  )
}

interface Dot {
  x: number
  y: number
  color: Color
}

type DotMatrix = Dot[][]
let dots: DotMatrix = []

const config: GameConfig = {
  create: create,
  update: update,
  containerId: "game",
  frameRate: 10,
  gridWidth: 64,
  gridHeight: 64,
  dotSize: 8,
  gapSize: 4,
}

let game = new Game(config)

function create(game: Game) {
  seedRandom(game, 0.5, config)
  initDots(dots, game, config)
}

function update(game: Game) {
  display(dots, game)
  dots = rules(dots)
}

function display(dots: DotMatrix, game: Game) {
  for (let x = 0; x < dots.length; x++) {
    for (let y = 0; y < dots[x].length; y++) {
      game.setDot(x, y, dots[x][y].color)
    }
  }
}

function seedRandom(game: Game, threshold: number, config: GameConfig) {
  if (config.gridWidth && config.gridHeight) {
    for (let x = 0; x < config.gridWidth; x++) {
      for (let y = 0; y < config.gridHeight; y++) {
        if (Math.random() > threshold) {
          game.setDot(x, y, Color.Black)
        }
      }
    }
  }
}

function initDots(dots: DotMatrix, game: Game, config: GameConfig) {
  if (config.gridWidth && config.gridHeight) {
    for (let x = 0; x < config.gridWidth; x++) {
      dots.push([])
      for (let y = 0; y < config.gridHeight; y++) {
        const dot = { x, y, color: game.getDot(x, y) }
        dots[x].push(dot)
      }
    }
  }
}

function rules(dots: DotMatrix) {
  const newDots: DotMatrix = []

  for (let x = 0; x < dots.length; x++) {
    const newRow: Dot[] = []
    for (let y = 0; y < dots[x].length; y++) {
      const dot = dots[x][y]
      const neighbors = countAliveNeighbors(dots, x, y)

      if (dot.color === Color.Black) {
        if (neighbors === 2 || neighbors === 3) {
          newRow.push({ x, y, color: Color.Black })
        } else {
          newRow.push({ x, y, color: Color.Gray })
        }
      } else if (neighbors === 3) {
        newRow.push({ x, y, color: Color.Black })
      } else newRow.push({ x, y, color: Color.Gray })
    }
    newDots.push(newRow)
  }

  return newDots
}

function countAliveNeighbors(dots: DotMatrix, x: number, y: number) {
  let count = 0
  for (let dRow = -1; dRow <= 1; dRow++) {
    for (let dCol = -1; dCol <= 1; dCol++) {
      const neighborRow = x + dRow
      const neighborCol = y + dCol
      if (!(dRow === 0 && dCol === 0)) {
        try {
          if (dots[neighborRow][neighborCol].color === Color.Black) {
            count++
          }
        } catch (error) {}
      }
    }
  }
  return count
}

export default GOL
