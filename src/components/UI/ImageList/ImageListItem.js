// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing components
import ImageListItemLandscape from './ImageListItemLandscape';
import ImageListItemPortrait from './ImageListItemPortrait';

const imageListItem = (props) => {
    let imgJsx;

    if (props.imageWidth > props.imageHeight) {
        imgJsx = (
            <ImageListItemLandscape {...props} />
        );
    } else if (props.imageHeight > props.imageWidth) {
        imgJsx = (
            <ImageListItemPortrait {...props} />
        );
    }

    return (
        <React.Fragment>
            { imgJsx }
        </React.Fragment>
    );
};

imageListItem.propTypes = {
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number
};

imageListItem.defaultProps = {
    imageHeight: 0,
    imageWidth: 0
};

export default imageListItem;
