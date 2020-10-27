import "./Game.scss"
import Player from "./Player"

function Players(props) {

    return ( 
      <div className = "playersContainer" >
        {props.players.map(player => (
          < Player key={player.id} {...player} numOfPlayers={props.players.length}/>
        ))}
      </div>
    );
  }

  export default Players;