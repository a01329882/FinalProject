import './SignUp.css'
import logo from '../logo.png';
import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <div className="LogIn-container2">
            <div className="LogIn-vertical-organizer2">
                <div className="logo-and-title-organizer2">
                    <img className='LogIn-logo2' src={logo}/>
                    <h2>Registrate</h2>
                </div>
                <form className='LogIn-form2'>
                    <label for="nombre2">Nombre:</label><br/>
                    <input type="text" id="SignIn-usuario" name="nombre2"/><br/>
                    <label for="usuario2">Usuario:</label><br/>
                    <input type="text" id="SignIn-usuario" name="usuario2"/><br/>
                    <label for="contraseña">Contraseña:</label><br/>
                    <input type="text" id="SignIn-contraseña" name="contraseña2"/><br/>
                </form>
                <button id='SignIn-submit-btn' ><Link to="/HomePage">Registrarse</Link></button>
            </div>
        </div>
      )
}

export default SignUp




//jere