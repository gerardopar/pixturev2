// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const imageModal = props => (
    <div className="imageModal">
        {/* image needs a responsive image container */}
        <div className="imageModal__container z-depth-5">
            <div className="imageModal__container--header">
                <div className="imageModal__container--user--wrap">
                    {
                        props.user !== '' 
                            ? <img className="imageModal__container--user" src={props.user} alt="user" />
                            : <i className="medium material-icons imageModal__container--user">person</i>

                    }
                </div>
                <div className="imageModal__container--details--wrap">
                    <div className="imageModal__container--details--likes">
                        <i className="material-icons">favorite</i>
                        <p className="imageModal__container--details--likes--text">
                        {props.likes}
                        {' '}
                        likes
                        </p>
                    </div>
                    <div className="imageModal__container--details--views">
                        <i className="material-icons">visibility</i>
                        <p className="imageModal__container--details--likes--text">
                        {props.views}
                        {' '}
                        views
                        </p>
                    </div>
                    <a href={props.img} target="_blank" rel="noopener noreferrer" className="imageModal__container--details--download">Download</a>
                </div>
            </div>
                {
                    (props.width > props.height)
                    ? <img className="imageModal__image z-depth-1" src={props.img} alt="" /> 
                    : <img className="imageModal__image--portrait z-depth-1" src={props.img} alt="" />
                }
        </div>
        {/* absolute position btn */}
        <button 
          type="button"
          onClick={props.handleCloseModal}
          className="material-icons imageModal__btn--close"
        >
        close
        </button>
    </div>
);

imageModal.propTypes = {
    height: PropTypes.number,
    img: PropTypes.string,
    likes: PropTypes.number,
    user: PropTypes.string,
    views: PropTypes.number,
    width: PropTypes.number,
    handleCloseModal: PropTypes.func
};

imageModal.defaultProps = {
    height: 0,
    img: '',
    likes: 0,
    user: '',
    views: 0,
    width: 0,
    handleCloseModal: () => {}
};

export default imageModal;
