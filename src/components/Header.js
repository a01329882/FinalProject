import './Header.css'
import logo from './logo.png';

const header = () => {
  return (
    <header className="Header">
        <div className='App-logo-section'>
            <img src={logo} className="App-logo-img" alt="logo" />
        </div>
        <div className='btns-logo-section'>
            <button className='btn'>Log-in</button>
            <button className='btn'>Sign-in</button>
            <button className='btn'>About us</button>
        </div>
    </header>
  )
}

export default header

