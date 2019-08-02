// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing components
import ImageListItem from './ImageListItem';

const imageList = props => (
    <React.Fragment>
        <div className="imageList">
            {
                props.images.length > 0 
                    ? props.images.map(img => (
                        <ImageListItem
                          openModal={props.handleOpenModal}
                          key={img.id} 
                          {...img}
                        />
                        )) 
                    : null
            }
        </div>
    </React.Fragment>
);

imageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    handleOpenModal: PropTypes.func
};

imageList.defaultProps = {
    images: [],
    handleOpenModal: () => {}
}; 

export default imageList;
