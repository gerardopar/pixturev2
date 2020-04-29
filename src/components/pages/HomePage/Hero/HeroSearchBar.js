import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const heroSearchBar = props => (
    <React.Fragment>
        <div className="hero__form--wrap">
            <form onSubmit={props.handleImageSearch} className="hero__form">
                <input 
                  name="imageSearched" 
                  type="text" 
                  className="hero__form--input" 
                  autoComplete="off"
                  placeholder="Search for free photos" 
                />
                <button type="button" className="material-icons hero__form--btn">search</button>
            </form>
        </div>
        <div className="hero__suggest--container">
            <div className="hero__suggest--wrap">
                <p className="hero__suggest">
                    Suggested:
                        <NavLink className="hero__suggest--link" to="/search/winter?page=1"> winter</NavLink>
                        <NavLink className="hero__suggest--link" to="/search/christmas?page=1"> christmas</NavLink>
                        <NavLink className="hero__suggest--link" to="/search/nature?page=1"> nature</NavLink>
                        <NavLink className="hero__suggest--link" to="/search/snow?page=1"> snow</NavLink>
                        <NavLink className="hero__suggest--link" to="/search/travel?page=1"> travel</NavLink>
                        <NavLink className="hero__suggest--link" to="/search/family?page=1"> family</NavLink>
                </p>
            </div>
        </div>
    </React.Fragment>
);

heroSearchBar.propTypes = {
    handleImageSearch: PropTypes.func
};

heroSearchBar.defaultProps = {
    handleImageSearch: () => {}
};

export default heroSearchBar;
