import "./Game.scss"
import Row from "./Row"

function Board(props) {

    return ( 
      <div className = "boardContainer" >
        {props.rows.map(row => (
        < Row key={row.id} id={row.id} className={`row ${row.isEven ? 'even' : 'odd'}`} tiles={row.tiles}/>
        ))}
      </div>
    );
  }

  export default Board;