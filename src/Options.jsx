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
        props.setMoveBot(Tijera)
    };

    return (
      <div> 
        <button type="button" onClick={() => handleClick(Piedra)}>
          <img src="/PIEDRA.png" style={{width: '5rem'}}/>
        </button>
        <button onClick={() => handleClick(Papel)}>
          <img src="/PAPEL.png" style={{width: '5rem'}}/>
        </button>
        <button onClick={() => handleClick(Tijera)}>
          <img src="/TIJERA.png" style={{width: '5rem'}}/>
        </button>
        <button onClick={() => handleClick(Lagarto)}>
          <img src="/LAGARTO.png" style={{width: '5rem'}}/>
        </button>
        <button onClick={() => handleClick(Spock)}>
          <img src="/SPOCK.png" style={{width: '5rem'}}/>
        </button>
      </div>
    );
}

export default Options;