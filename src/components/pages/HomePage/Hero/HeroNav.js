import React from 'react';
import logo_img from '../../../../assets/img/photo-camera.svg';
import { NavLink } from 'react-router-dom';

const heroNav = () => (
    <div className="hero__nav">
        <div className="hero__nav--logo--wrap">
            <img className="hero__nav--logo--img" src={logo_img} />
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