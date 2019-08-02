// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const imageListItemPortrait = props => (
    <div className="imageItemPortrait">
        <img 
          onClick={() => props.openModal(props.largeImageURL, props.imageHeight, props.imageWidth, props.userImageURL, props.views, props.likes)} 
          className="imageItem__img z-depth-1" 
          src={props.webformatURL}
          alt=""
        />
    </div>
);

imageListItemPortrait.propTypes = {
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    largeImageURL: PropTypes.string,
    likes: PropTypes.number,
    userImageURL: PropTypes.string,
    views: PropTypes.number,
    webformatURL: PropTypes.string,
    openModal: PropTypes.func
};

imageListItemPortrait.defaultProps = {
    imageHeight: 0,
    imageWidth: 0,
    largeImageURL: '',
    likes: 0,
    userImageURL: '',
    views: 0,
    webformatURL: '',
    openModal: () => {}
};

export default imageListItemPortrait;
