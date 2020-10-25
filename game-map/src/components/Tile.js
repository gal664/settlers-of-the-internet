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
  let numberStyle={
    fontSize: "7em",
    zIndex: 1,
    fontWeight: "bold",
  }

  switch (props.type) {
    case "ocean":
      return (<Hexagon className={`tile ${props.type}`} style={oceanStyle}></Hexagon>);
    case "desert":
      return (<Hexagon className={`tile ${props.type}`} style={tileStyle}></Hexagon>);
    default:
      return (
        <Hexagon className={`tile ${props.type}`} style={tileStyle}>        
          <circle cx="50%" cy="50%" r="20%" style={circleStyle}></circle>
          <text x={props.number - 10 >= 0 ? "38%" : "45%"} y="57%" style={numberStyle}>{props.number}</text>
        </Hexagon>
    );
  }
}
  
export default Tile;