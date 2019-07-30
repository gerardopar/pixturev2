// importing modules
import React from 'react';
// importing components
import ImageListItemLandscape from '../../UI/ImageList/ImageListItemLandscape';
import ImageListItemPortrait from '../../UI/ImageList/ImageListItemPortrait';

const imageListItem = (props) => {
    let imgJsx;

    if(props.imageWidth > props.imageHeight) {
        imgJsx = (
            <ImageListItemLandscape {...props} />
        );
    }
    else if(props.imageHeight > props.imageWidth) {
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

export default imageListItem;