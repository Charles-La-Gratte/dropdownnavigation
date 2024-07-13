import React from 'react';
import "../Styles/Picture.css";
import picture from "../image-hero-desktop.png";

function Picture() {
  return (
    <div >
        <img className='picture' src={picture} alt="" />
    </div>
  )
}

export default Picture;