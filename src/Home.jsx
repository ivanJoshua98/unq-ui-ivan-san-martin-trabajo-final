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
      <>
        <h1>Piedra Papel Tijera Lagarto Spock</h1>
        <div className="component-center">
          <input onChange={handleNameChange} placeholder="Ingrese Nombre Jugador" /> 
          <h2>VS Bot</h2>
          <button onClick={handleClick}>
              Iniciar Partida
          </button>
        </div>
      </>
    );
}

export default Home;