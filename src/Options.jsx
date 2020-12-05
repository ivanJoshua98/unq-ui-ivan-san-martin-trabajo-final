import './App.css';

const Piedra = {
    id: "Piedra",
    debilidades: ["Papel", "Spock"],
    fortalezas: ["Tijera", "Lagarto"],
    neutral: "Piedra"
  };
  
  const Papel = {
    id: "Papel",
    debilidades: ["Tijera", "Lagarto"],
    fortalezas: ["Piedra", "Spock"],
    neutral: "Papel"
  };
  
  const Tijera = {
    id: "Tijera",
    debilidades: ["Piedra", "Spock"],
    fortalezas: ["Papel", "Lagarto"],
    neutral: "Tijera"
  };
  
  const Spock = {
    id: "Spock",
    debilidades:["Papel", "Lagarto"],
    fortalezas: ["Piedra", "Tijera"],
    neutral: "Spock"
  };
  
  const Lagarto = {
    id: "Lagarto",
    debilidades: ["Piedra", "Tijera"],
    fortalezas: ["Papel", "Spock"],
    neutral: "Lagarto"
  };

const Options = (props) => {

    const handleClick = (move) => {
        console.log("Se cambio de jugada", move)
        props.setMovePlayer(move)
        moveBot()
    }

    const moveBot = () => {
        console.log("Movida bot", Tijera)
        const random = Math.floor(Math.random() * 5);
        const plays = [Piedra, Papel, Tijera, Lagarto, Spock]
        props.setMoveBot(plays[random])
        props.setResult("")
    };

    return (
      <div className="container"> 
        <button type="button" onClick={() => handleClick(Piedra)} className="btn btn-outline-dark imagen-juego">
          <img src="/PIEDRA.png" style={{width: '10rem'}}/>
        </button>
        <button onClick={() => handleClick(Papel)} className="btn btn-outline-secondary imagen-juego">
          <img src="/PAPEL.png" style={{width: '10rem'}}/>
        </button>
        <button onClick={() => handleClick(Tijera)} className="btn btn-outline-danger imagen-juego">
          <img src="/TIJERA.png" style={{width: '10rem'}}/>
        </button>
        <button onClick={() => handleClick(Lagarto)} className="btn btn-outline-success imagen-juego">
          <img src="/LAGARTO.png" style={{width: '10rem'}}/>
        </button>
        <button onClick={() => handleClick(Spock)} className="btn btn-outline-warning imagen-juego">
          <img src="/SPOCK.png" style={{width: '10rem'}}/>
        </button>
      </div>
    );
}

export default Options;