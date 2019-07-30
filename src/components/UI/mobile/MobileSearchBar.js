import React from 'react';

const mobileSearchBar = (props) => (
    <div className="mbs">
        <div className="mobileSearchBar">
            <form 
                id="mobileSearchBar__form"
                className="mobileSearchBar__form" 
                onSubmit={props.handleImageSearch}>
                <input 
                    name="imageSearched" 
                    type="text" 
                    className="mobileSearchBar__form--input" 
                    autoComplete="off"
                    placeholder="Search for free photos"/>
                <button className="material-icons mobileSearchBar__form--btn">search</button>
            </form>
        </div>
    </div>
);

export default mobileSearchBar;