import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const [namePlayer, setNamePlayer] = useState("");   
    
    const handleNameChange = (event) => {
      setNamePlayer(event.target.value)
      localStorage.setItem("namePlayer", namePlayer);
    };  
    
    const handleClick = () => {
        history.push("/play")
    };   
    
    return (
      <div className="container" style={{padding: '25px 10px'}}>
      <div className="row">
        <div className=" col-md-4 main">
            <h1 className="component-center">Piedra Papel Tijera</h1>
            <h1 className="component-center">Lagarto Spock</h1>
          <div className="component-center">
            <input onChange={handleNameChange} placeholder="Ingrese nombre jugador" className="form-control"/> 
            <h2 className="component-center">VS Bot</h2>
            <button onClick={handleClick} className="btn btn-outline-danger">
                Iniciar Partida
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <img src="/the-big-bang-theory.png" style={{width: '45rem'}}/>
        </div>
      </div>
      </div>
    );
}

export default Home;