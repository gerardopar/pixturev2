import React from 'react';
import PropTypes from 'prop-types';

const categoryTag = props => (
    <div className="tag">
        <div className="tag__wrap">
            <p className="tag__title">
                Free images of
                {' '}
                { props.tag }
            </p>
        </div>
    </div>
);

categoryTag.propTypes = {
    tag: PropTypes.string
};

categoryTag.defaultProps = {
    tag: ''
};

export default categoryTag;
