import Distance from './Distance.png';
import Steering from './Steering-Wheel.png';
import Throttle from './Throttle.png';
import { Link } from "react-router-dom";
//import LinkList from '../LinkList/LinkList';

//import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage({ link }) {
  return (
      <div className='HomePageContainer'>
        <div className='HomePageOrganizer'>
            <h1>JetRacer</h1>
            <h4>Fecha y hora de la ultima actualizacion</h4>
            <div className="threeDataForm">
                <div>
                    <img src={Steering} className="Steering" alt="Steering-wheel" />
                    <h4>% Direccion: {link.rotation}</h4>
                    
                </div>
                <div>
                    <img src={Throttle} className="Throttle" alt="Steering-wheel" />
                    <h4>% Velocidad: {link.speed}</h4>
                </div>
                <div>
                    <img src={Distance} className="Throttle" alt="Distance" />
                    <h4>cm Distancia de la referencia: {link.distance}</h4>

                </div>
            </div>
        </div>
        <hr/>
        <button className='btn'><Link to="../create">AddData</Link></button>
      </div>
  )
}

export default HomePage