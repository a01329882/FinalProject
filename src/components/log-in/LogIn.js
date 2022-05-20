import './LogIn.css';
import logo from '../logo.png';

function LogIn() {
  return (
    <div className="LogIn-container">
        <div className="LogIn-vertical-organizer">
            <div className="logo-and-title-organizer">
                <img className='LogIn-logo' src={logo}/>
                <h2>Iniciar sesión</h2>
            </div>
            <form className='LogIn-form'>
                <label for="usuario">Usuario</label><br/>
                <input type="text" id="LogIn-usuario" name="usuario"/><br/>
                <label for="contraseña">Contraseña</label><br/>
                <input type="text" id="LogIn-contraseña" name="contraseña"/><br/>
                <input type="submit" id='LogIn-submit-btn'/>
            </form>
        </div>
    </div>
  )
}

export default LogIn