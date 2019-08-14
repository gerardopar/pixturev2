// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing components
import HeroNav from './HeroNav';
import HeroTitle from './HeroTitle';
import HeroSearchBar from './HeroSearchBar';
// importing assets
// importing assets 
import defaultBk from '../../../../assets/img/bk.jpg';

const hero = props => (
    <div
      style={{ backgroundImage: `url(${defaultBk})` }}
      className="hero"
    >
        <HeroNav />
        <HeroTitle />
        <HeroSearchBar 
          handleImageSearch={props.handleImageSearch}
        />
    </div>
);

hero.propTypes = {
    handleImageSearch: PropTypes.func
};

hero.defaultProps = {
    handleImageSearch: () => {}
};

export default hero;
