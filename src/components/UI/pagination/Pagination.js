import React from 'react';

const pagination = (props) => (
    <div className="pagination">
        <div className="pagination__wrap">
            <button disabled={props.page === 1 || props.page < 1} onClick={() => props.handlePagination('previous')} className="pagination__btn--prev"><i className="material-icons">arrow_back</i> PREV</button>
            <p className="pagination__num--current">{ props.page }</p>
            <button onClick={() => props.handlePagination('next')} className="pagination__btn--next">NEXT <i className="material-icons">arrow_forward</i></button>
        </div>
    </div>
);

export default pagination;