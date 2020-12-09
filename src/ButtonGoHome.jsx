import { useHistory } from 'react-router-dom';
import './App.css';

const ButtonGoHome = () => {
    
    const history = useHistory();

    const goHome = () => {
        history.push("/home")
        localStorage.removeItem("namePlayer")
    };

    return (
        <div className="component-center">
          <button onClick={goHome} className="btn btn-outline-danger button-size">
              Volver a inicio
          </button>
        </div>
    )
};

export default ButtonGoHome;