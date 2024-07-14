import React from 'react';
import '../Styles/Sponsor.css';
import logo1 from '../client-audiophile.png';
import logo2 from '../client-databiz.png';
import logo3 from '../client-maker.png';
import logo4 from '../client-meet.png';

function Sponsor() {
  return (
    
    <div className='box'>
      <img className='audiophile' src={logo1} alt="audiophile" />
      <img className='databiz' src={logo2} alt="databiz" />
      <img className='maker' src={logo3} alt="maker" />
      <img className='meet' src={logo4} alt="meet" />
    </div>
    
  )
}

export default Sponsor;