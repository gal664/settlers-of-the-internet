// react-hexagon repo: https://github.com/rexxars/react-hexagon
import Hexagon from 'react-hexagon'
import "./Game.scss"


function renderTileFillByType(type) {
  switch (type) {
    case "lumbermill": return "389342"
    case "field": return "f9db4e"
    case "mine": return "c76c53"
    case "quarry": return "959987"
    case "pasture": return "b4ef61"
    case "desert": return "ffec95"
    case "ocean": return "33a3ff"
    default: return "ffffff"
  }
}

function renderSides(sides, style) {
  let sidesArray = []
  for (let i = 0; i < sides.length; i++){
    switch (i) {
      case 0: sidesArray.push(<line className="side" x1="50%" y1="0%" x2="0%" y2="25%" style={style}></line>); break;
      case 1: sidesArray.push(<line className="side" x1="0%" y1="25%" x2="0%" y2="75%" style={style}></line>); break;
      case 2: sidesArray.push(<line className="side" x1="0%" y1="75%" x2="50%" y2="100%" style={style}></line>); break;
      case 3: sidesArray.push(<line className="side" x1="50%" y1="100%" x2="100%" y2="75%" style={style}></line>); break;
      case 4: sidesArray.push(<line className="side" x1="100%" y1="75%" x2="100%" y2="25%" style={style}></line>); break;
      case 5: sidesArray.push(<line className="side" x1="100%" y1="25%" x2="50%" y2="0%" style={style}></line>); break;
    }
  }
  return sidesArray;
}

function renderVertice(vertices, style) {
  let verticesArray = []
  for (let i = 0; i < vertices.length; i++){
    switch (i) {
      case 0: verticesArray.push(<circle className="vertex" cx="50%" cy="0%" r="12%" style={style}></circle>); break;
      case 1: verticesArray.push(<circle className="vertex" cx="0%" cy="25%" r="12%" style={style}></circle>); break;
      case 2: verticesArray.push(<circle className="vertex" cx="0%" cy="75%" r="12%" style={style}></circle>); break;
      case 3: verticesArray.push(<circle className="vertex" cx="50%" cy="100%" r="12%" style={style}></circle>); break;
      case 4: verticesArray.push(<circle className="vertex" cx="100%" cy="75%" r="12%" style={style}></circle>); break;
      case 5: verticesArray.push(<circle className="vertex" cx="100%" cy="25%" r="12%" style={style}></circle>); break;
    }
  }
  return verticesArray;
}

function Tile(props) {
    
  let oceanStyle={
      stroke: "86c8fd",
      strokeWidth: 20,
      fill: renderTileFillByType(props.type)
  }
  let tileStyle={
      stroke: "ffec95",
      strokeWidth: 20,
      fill: renderTileFillByType(props.type)
  }
  let circleStyle={
    fill: "ffec95",
  }
  let vertexStyle={
    fill: "red",
  }
  let sideStyle={
    stroke: "red",
    strokeWidth: 45
  }
  let numberStyle={
    fontSize: "7em",
    zIndex: 1,
    fontWeight: "bold",
  }

  switch (props.type) {
    case "ocean":
      return (
      <Hexagon className={`tile ${props.type}`} style={oceanStyle}>
        {renderVertice(props.vertices, vertexStyle)}
        {renderSides(props.sides, sideStyle)}
      </Hexagon>);
    case "desert":
      return (
      <Hexagon className={`tile ${props.type}`} style={tileStyle}>
        {renderVertice(props.vertices, vertexStyle)}
        {renderSides(props.sides, sideStyle)}
      </Hexagon>);
    default:
      return (
        <Hexagon className={`tile ${props.type}`} style={tileStyle}>        
          <circle cx="50%" cy="50%" r="20%" style={circleStyle}></circle>
          <text x={props.number - 10 >= 0 ? "38%" : "45%"} y="57%" style={numberStyle}>{props.number}</text>
          {renderVertice(props.vertices, vertexStyle)}
          {renderSides(props.sides, sideStyle)}
        </Hexagon>
    );
  }
}
  
export default Tile;