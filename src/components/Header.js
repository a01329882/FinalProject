import './Header.css'
import logo from './logo.png';
import { Link } from "react-router-dom";
const header = () => {
  return (
    <header className="Header">
        <div className='App-logo-section'>
            <img src={logo} className="App-logo-img" alt="logo" />
        </div>
        <div className='btns-logo-section'>
            <button className='btn'><Link to="LogIn">Log-in</Link></button>
            <button className='btn'><Link to="SignUp">Sign-up</Link></button>
            <button onClick={() => window.location.reload()} className='btn'><Link to="HomePage">HomePage</Link></button>
            <button className='btn'><Link to="/">LandingPage</Link></button>
        </div>
    </header>
  )
}

export default header

