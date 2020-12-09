import './App.css';

const Piedra = {
    id: "PIEDRA",
    debilidades: ["PAPEL", "SPOCK"],
    fortalezas: ["TIJERA", "LAGARTO"],
    neutral: "PIEDRA"
  };
  
  const Papel = {
    id: "PAPEL",
    debilidades: ["TIJERA", "LAGARTO"],
    fortalezas: ["PIEDRA", "SPOCK"],
    neutral: "Papel"
  };
  
  const Tijera = {
    id: "TIJERA",
    debilidades: ["PIEDRA", "SPOCK"],
    fortalezas: ["PAPEL", "LAGARTO"],
    neutral: "TIJERA"
  };
  
  const Spock = {
    id: "SPOCK",
    debilidades:["PAPEL", "LAGARTO"],
    fortalezas: ["PIEDRA", "TIJERA"],
    neutral: "SPOCK"
  };
  
  const Lagarto = {
    id: "LAGARTO",
    debilidades: ["PIEDRA", "TIJERA"],
    fortalezas: ["PAPEL", "SPOCK"],
    neutral: "LAGARTO"
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
      <>
      <div className="component-center">
        <a>Elige una opcion</a>
      </div>
      <div className="elections-center"> 
        <button type="button" onClick={() => handleClick(Piedra)} className="btn btn-outline-dark transparent margin-right margin-left">
          <img src="/PIEDRA.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Papel)} className="btn btn-outline-secondary transparent margin-right">
          <img src="/PAPEL.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Tijera)} className="btn btn-outline-danger transparent margin-right">
          <img src="/TIJERA.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Lagarto)} className="btn btn-outline-success transparent margin-right">
          <img src="/LAGARTO.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Spock)} className="btn btn-outline-warning transparent margin-right">
          <img src="/SPOCK.png" className="image-size"/>
        </button>
      </div>
      </>
    );
}

export default Options;