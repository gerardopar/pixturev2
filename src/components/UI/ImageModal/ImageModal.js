// importing modules
import React from 'react';

const imageModal = (props) => (
    <div className="imageModal">
        {/* image needs a responsive image container */}
        <div className="imageModal__container z-depth-5">
            <div className="imageModal__container--header">
                <div className="imageModal__container--user--wrap">
                    {
                        props.user !== '' ? 
                            <img className="imageModal__container--user" src={props.user} />
                            : <i className="medium material-icons imageModal__container--user">person</i>

                    }
                </div>
                <div className="imageModal__container--details--wrap">
                    <div className="imageModal__container--details--likes">
                        <i className="material-icons">favorite</i>
                        <p className="imageModal__container--details--likes--text">{props.likes} likes</p>
                    </div>
                    <div className="imageModal__container--details--views">
                        <i className="material-icons">visibility</i>
                        <p className="imageModal__container--details--likes--text">{props.views} views</p>
                    </div>
                    <a href={props.img} target="_blank" className="imageModal__container--details--download">Download</a>
                </div>
            </div>
                {
                    (props.width > props.height) ?
                    <img className="imageModal__image z-depth-1" src={props.img} /> : 
                    <img className="imageModal__image--portrait z-depth-1" src={props.img} />
                }
        </div>
        {/* absolute position btn */}
        <button 
            onClick={props.handleCloseModal}
            className="material-icons imageModal__btn--close">
        close</button>
    </div>
);

export default imageModal;