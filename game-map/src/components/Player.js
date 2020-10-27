import "./Game.scss"

function Player(props) {

    return ( 
      <div className = "playerContainer" style={{height: `${100 / props.numOfPlayers}%`}}>
        <div className="playerIconContainer">
          <img className="playerIcon" src={props.icon} alt={props.name}></img>
        </div>
        <div className="playerInfoContainer" style={{backgroundColor: `${props.color}`}}>
          <div className="playerName">{props.name}</div>
          <div className="playerDetails">{`Victory Points: ${props.victoryPoints}`}</div>
        </div>
      </div>
    );
  }

  export default Player;