import './LogIn.css';
import logo from '../../logo.png';
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="LogIn-container">
        <div className="LogIn-vertical-organizer">
            <div className="logo-and-title-organizer">
                <img className='LogIn-logo' src={logo} alt="logo"/>
                <h2>Iniciar sesión</h2>
            </div>
            <form className='LogIn-form'>
                <label for="usuario">Usuario:</label><br/>
                <input type="text" id="LogIn-usuario" name="usuario"/><br/>
                <label for="contraseña">Contraseña:</label><br/>
                <input type="text" id="LogIn-contraseña" name="contraseña"/><br/>
            </form>
            <button id='LogIn-submit-btn' ><Link to="/HomePage">Iniciar Sesión:</Link></button>
        </div>
    </div>
  )
}

export default LogIn