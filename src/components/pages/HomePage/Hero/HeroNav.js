// importing modules
import React from 'react';
// import { NavLink } from 'react-router-dom';

// importing assets
import logoImg from '../../../../assets/img/photo-camera.svg';

const heroNav = () => (
    <div className="hero__nav">
        <div className="hero__nav--logo--wrap">
            <img className="hero__nav--logo--img" src={logoImg} alt="hero logo" />
            <p className="hero__nav--logo">PIXTURE</p>
        </div>
        <div>
            {
                /*
                <NavLink to="/" className="hero__nav--login">LOGIN</NavLink>
                <NavLink to="/" className="hero__nav--signup">JOIN FREE</NavLink>
                */
            }
        </div>
    </div>
);

export default heroNav;
