import "./Game.scss"
import Players from "./Players"
import Board from "./Board"

let game = {
  players: [
    {
      inventory: {
        roads: 15,
        settlement: 5,
        city: 4,
        resources: [],
        devCards: []
      },
      victoryPoints: 0,
      icon: "https://i.imgur.com/tnJ3msg.jpg",
      color: "red",
      id: "f87yrd",
      name: "Gal"
    },
    {
      inventory: {
        roads: 15,
        settlement: 5,
        city: 4,
        resources: [],
        devCards: []
      },
      victoryPoints: 0,
      icon: "https://i.redd.it/46vb7s7niu011.jpg",
      color: "yellow",
      id: "aij98s",
      name: "Glass"
    },
    {
      inventory: {
        roads: 15,
        settlement: 5,
        city: 4,
        resources: [],
        devCards: []
      },
      victoryPoints: 0,
      icon: "data:image/jpeg;base64,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",
      color: "green",
      id: "098jis",
      name: "Aviv"
    },
    {
      inventory: {
        roads: 15,
        settlement: 5,
        city: 4,
        resources: [],
        devCards: []
      },
      victoryPoints: 0,
      icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/635fa5b3-3003-4fb4-9df9-388d8f5bda3d/d5yawge-f47d89f8-3099-4e19-8d49-57411c370dd4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjM1ZmE1YjMtMzAwMy00ZmI0LTlkZjktMzg4ZDhmNWJkYTNkXC9kNXlhd2dlLWY0N2Q4OWY4LTMwOTktNGUxOS04ZDQ5LTU3NDExYzM3MGRkNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.FGD22CH2Qr7ip6KFnljULuuwA_d5s7X_M1Ek__bom0A",
      color: "blue",
      id: "9fasd8",
      name: "Ziv"
    }
  ], 
  tileRows: [
    {
      id: 0,
      isEven: false,
      tiles: [
        {
          id: 0,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 1,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 2,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 3,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 5,
          isOccupied: false,
          type: "lumbermill",
          number: 2,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 6,
          isOccupied: false,
          type: "field",
          number: 12,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 7,
          isOccupied: false,
          type: "mine",
          number: 3,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 8,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 10,
          isOccupied: false,
          type: "quarry",
          number: 11,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 11,
          isOccupied: false,
          type: "field",
          number: 4,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 12,
          isOccupied: false,
          type: "field",
          number: 10,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 13,
          isOccupied: false,
          type: "quarry",
          number: 5,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 14,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 15,
          isOccupied: false,
          type: "pasture",
          number: 9,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 16,
          isOccupied: false,
          type: "pasture",
          number: 6,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 17,
          isOccupied: false,
          type: "desert",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 18,
          isOccupied: false,
          type: "field",
          number: 11,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 19,
          isOccupied: false,
          type: "mine",
          number: 3,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 20,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 22,
          isOccupied: false,
          type: "quarry",
          number: 10,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 23,
          isOccupied: false,
          type: "lumbermill",
          number: 4,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 24,
          isOccupied: false,
          type: "field",
          number: 9,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 25,
          isOccupied: false,
          type: "pasture",
          number: 5,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 26,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 27,
          isOccupied: false,
          type: "mine",
          number: 6,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 28,
          isOccupied: false,
          type: "lumbermill",
          number: 8,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 29,
          isOccupied: false,
          type: "lumbermill",
          number: 8,
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 30,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
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
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 32,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 33,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        },
        {
          id: 34,
          isOccupied: false,
          type: "ocean",
          vertices: [
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
            { player: null, building: null, numResources: 1, victoryPoints: 1 },
          ],
          sides: [
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
            {player: null, building: null},
          ]
        }
      ]
    }
  ]
}


function Game() {
    return (
      <div className="gameContainer">
        <Players players={game.players}/>
        <Board tileRows={game.tileRows}/>
      </div>
    );
  }
  
  export default Game;