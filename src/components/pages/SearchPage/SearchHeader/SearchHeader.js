// importing modules
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const searchHeader = props => (
    <div className="searchPage__header">
        <div className="searchPage__col--one">
            <img className="searchPage__logo--img" src="https://pixture.s3.amazonaws.com/photo-camera.svg" alt="logo" />
            <NavLink to="/" className="searchPage__title">PIXTURE</NavLink>
        </div>
        <div className="searchPage__col--two">
            <form 
              id="searchPage__form"
              className="searchPage__form" 
              onSubmit={props.handleImageSearch}
            >
                <input 
                  name="imageSearched" 
                  type="text" 
                  className="searchPage__form--input" 
                  autoComplete="off"
                  placeholder="Search for free photos" 
                />
                <button type="submit" className="material-icons searchPage__form--btn">search</button>
            </form>
            {/* 
                <NavLink to="/" className="searchPage__login">LOGIN</NavLink>
                <NavLink to="/" className="searchPage__signup">JOIN FREE</NavLink>
            */}
        </div>
    </div>
);

searchHeader.propTypes = {
    handleImageSearch: PropTypes.func
};

searchHeader.defaultProps = {
    handleImageSearch: () => {}
};

export default searchHeader;
