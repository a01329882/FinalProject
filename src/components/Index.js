import React from 'react'
import './Index.css'
import carImg from './JetRacer_Car.webp';

function Index() {
  return (
    <div className='IndexPage'>
        <div>
            <h1 className='IndexPage_title'>The Jet Racer Car API</h1>
        </div>
        <div>
            <img src={carImg} className="IndexPage_car_img" alt="logo" />
        </div>
        <div>
            <button className='btnIndex btnIndex1'>Log-in</button>
            <button className='btnIndex btnIndex2'>Sign-in</button>
        </div>
    </div>
  )
}

export default Index