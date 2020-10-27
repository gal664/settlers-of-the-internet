import "./Game.scss"
import Row from "./Row"

function Board(props) {

    return ( 
      <div className = "boardContainer" >
        {props.tileRows.map(row => (
        < Row key={row.id} {...row} className={`row ${row.isEven ? 'even' : 'odd'}`}/>
        ))}
      </div>
    );
  }

  export default Board;