import { hydrate } from 'react-dom';
import { useHistory } from 'react-router-dom';
import './App.css';

const Play = () => {

    const history = useHistory();

    const namePlayer = localStorage.getItem("namePlayer");    
    
    const goHome = () => {
        history.push("/home")
    };
    
    return (
      <>
        <h3>Se inicia una nueva partida con {namePlayer}</h3>
        <button onClick={goHome}>
            Volver a inicio
        </button>
      </>
    );
}

export default Play;