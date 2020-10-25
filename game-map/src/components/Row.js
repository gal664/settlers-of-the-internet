import "./Game.scss"
import Tile from "./Tile"

function Row(props) {
    return (
      <div className={props.className}>
        {props.tiles.map(tile => (
          < Tile key={tile.id} {...tile}/>
        ))}
      </div>
    );
  }
  
export default Row;