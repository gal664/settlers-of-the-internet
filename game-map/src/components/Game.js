import "./Game.scss"
import Board from "./Board"

let rows = [
  {
    id: 0,
    isEven: false,
    tiles: [{
        id: 0,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 1,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 2,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 3,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 1,
    isEven: false,
    tiles: [{
        id: 4,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 5,
        isOccupied: false,
        type: "lumbermill",
        number: 2,
        vertices: [],
        sides: []
      },
      {
        id: 6,
        isOccupied: false,
        type: "field",
        number: 12,
        vertices: [],
        sides: []
      },
      {
        id: 7,
        isOccupied: false,
        type: "mine",
        number: 3,
        vertices: [],
        sides: []
      },
      {
        id: 8,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 2,
    isEven: false,
    tiles: [{
        id: 9,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 10,
        isOccupied: false,
        type: "quarry",
        number: 11,
        vertices: [],
        sides: []
      },
      {
        id: 11,
        isOccupied: false,
        type: "field",
        number: 4,
        vertices: [],
        sides: []
      },
      {
        id: 12,
        isOccupied: false,
        type: "field",
        number: 10,
        vertices: [],
        sides: []
      },
      {
        id: 13,
        isOccupied: false,
        type: "quarry",
        number: 5,
        vertices: [],
        sides: []
      },
      {
        id: 14,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 3,
    isEven: false,
    tiles: [{
        id: 15,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 15,
        isOccupied: false,
        type: "pasture",
        number: 9,
        vertices: [],
        sides: []
      },
      {
        id: 16,
        isOccupied: false,
        type: "pasture",
        number: 6,
        vertices: [],
        sides: []
      },
      {
        id: 17,
        isOccupied: false,
        type: "desert",
        vertices: [],
        sides: []
      },
      {
        id: 18,
        isOccupied: false,
        type: "field",
        number: 11,
        vertices: [],
        sides: []
      },
      {
        id: 19,
        isOccupied: false,
        type: "mine",
        number: 3,
        vertices: [],
        sides: []
      },
      {
        id: 20,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 4,
    isEven: false,
    tiles: [{
        id: 21,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 22,
        isOccupied: false,
        type: "quarry",
        number: 10,
        vertices: [],
        sides: []
      },
      {
        id: 23,
        isOccupied: false,
        type: "lumbermill",
        number: 4,
        vertices: [],
        sides: []
      },
      {
        id: 24,
        isOccupied: false,
        type: "field",
        number: 9,
        vertices: [],
        sides: []
      },
      {
        id: 25,
        isOccupied: false,
        type: "pasture",
        number: 5,
        vertices: [],
        sides: []
      },
      {
        id: 26,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 5,
    isEven: false,
    tiles: [{
        id: 26,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 27,
        isOccupied: false,
        type: "mine",
        number: 6,
        vertices: [],
        sides: []
      },
      {
        id: 28,
        isOccupied: false,
        type: "lumbermill",
        number: 8,
        vertices: [],
        sides: []
      },
      {
        id: 29,
        isOccupied: false,
        type: "lumbermill",
        number: 8,
        vertices: [],
        sides: []
      },
      {
        id: 30,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  },
  {
    id: 6,
    isEven: false,
    tiles: [{
        id: 31,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 32,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 33,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      },
      {
        id: 34,
        isOccupied: false,
        type: "ocean",
        vertices: [],
        sides: []
      }
    ]
  }
]


function Game() {
    return (
      <div className="gameContainer">
        <Board rows={rows}/>
      </div>
    );
  }
  
  export default Game;