import React from 'react';

import ImageListItem from './ImageListItem';

const imageList = (props) => {
    return (
        <React.Fragment>
            <div className="imageList">
                {
                    props.images.length > 0 
                        ? props.images.map((img) => <ImageListItem
                                                        openModal={props.handleOpenModal}
                                                        key={img.id} 
                                                        {...img} />) 
                        : null
                }
            </div>
        </React.Fragment>
    );
};

export default imageList;