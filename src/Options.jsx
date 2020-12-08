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
      <>
      <div className="component-center">
        <a>Elige una opcion</a>
      </div>
      <div className="elections-center"> 
        <button type="button" onClick={() => handleClick(Piedra)} className="btn btn-outline-dark transparent">
          <img src="/PIEDRA.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Papel)} className="btn btn-outline-secondary transparent">
          <img src="/PAPEL.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Tijera)} className="btn btn-outline-danger transparent">
          <img src="/TIJERA.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Lagarto)} className="btn btn-outline-success transparent">
          <img src="/LAGARTO.png" className="image-size"/>
        </button>
        <button onClick={() => handleClick(Spock)} className="btn btn-outline-warning transparent">
          <img src="/SPOCK.png" className="image-size"/>
        </button>
      </div>
      </>
    );
}

export default Options;