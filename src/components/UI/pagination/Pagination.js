// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const pagination = props => (
    <div className="pagination">
        <div className="pagination__wrap">
            <button 
              disabled={props.page === 1 || props.page < 1} 
              onClick={() => props.handlePagination('previous')} 
              className="pagination__btn--prev"
              type="button"
            >
                <i className="material-icons">arrow_back</i>
                {' '}
                PREV
            </button>
            <p className="pagination__num--current">{ props.page }</p>
            <button 
              onClick={() => props.handlePagination('next')} 
              className="pagination__btn--next"
              type="button"
            >
                NEXT
                {' '}
                <i className="material-icons">arrow_forward</i>
            </button>
        </div>
    </div>
);

pagination.propTypes = {
    page: PropTypes.number,
    handlePagination: PropTypes.func
};

pagination.defaultProps = {
    page: 1,
    handlePagination: () => {}
};

export default pagination;
