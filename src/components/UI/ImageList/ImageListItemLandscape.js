import React from 'react';

const imageListItemLandscape = (props) => (
    <div className="imageItem">
        <img 
            onClick={() => props.openModal(props.largeImageURL, props.imageHeight, props.imageWidth, props.userImageURL, props.views, props.likes)} 
            className="imageItem__img z-depth-1" 
            src={props.webformatURL} />
    </div>
);

export default imageListItemLandscape;