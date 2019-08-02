// importing modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// importing redux actions
import { setImagesAsync, setOpenModal, setCloseModal } from '../../../actions/homePageActions';
// importing components
import Hero from './Hero/Hero';
import ImageList from '../../UI/ImageList/ImageList';
import ImageModal from '../../UI/ImageModal/ImageModal';
import Spinner from '../../UI/spinner/Spinner';

class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }

    componentWillMount() {
        this.props.setImagesAsync();
    }

    handleImageSearch = (e) => {
        e.preventDefault();
        const imageSearch = e.target.elements.imageSearched.value; // user input
        this.props.history.push(`/search/${imageSearch}?page=1`);
    }

    handleOpenModal = (imgUrl, height, width, user, views, likes) => {
        this.props.setOpenModal(imgUrl, height, width, user, views, likes);
    }

    handleCloseModal = () => {
        this.props.setCloseModal();
    }

    render() {
        return (
            <div>
                <Hero handleImageSearch={this.handleImageSearch} />
                {
                    this.props.images.length > 0 
                    ? (
                        <ImageList 
                          handleOpenModal={this.handleOpenModal}
                          images={this.props.images}
                        />
                        ) : <Spinner />
                }
                {
                    this.props.modal.hidden 
                    ? null 
                    : (
                        <ImageModal 
                          {...this.props.modal}
                          handleCloseModal={this.handleCloseModal}
                        />
                        )
                }
            </div>
        );
    }
}

// # redux state
const mapStateToProps = state => ({
    images: state.home.images,
    modal: state.home.modal
});
    
// # redux actions
const mapDispatchToProps = dispatch => ({
    setImagesAsync: () => dispatch(setImagesAsync()),
    setOpenModal: (imgUrl, height, width, user, views, likes) => dispatch(setOpenModal(imgUrl, height, width, user, views, likes)),
    setCloseModal: () => dispatch(setCloseModal())
});

HomePage.propTypes = {
    history: PropTypes.objectOf(PropTypes.any),
    images: PropTypes.arrayOf(PropTypes.object),
    modal: PropTypes.shape({
        img: PropTypes.string,
        height: PropTypes.number,
        hidden: PropTypes.bool,
        likes: PropTypes.number,
        tags: PropTypes.string,
        user: PropTypes.string,
        views: PropTypes.number,
        width: PropTypes.number
    }),
    setImagesAsync: PropTypes.func,
    setOpenModal: PropTypes.func,
    setCloseModal: PropTypes.func,
};

HomePage.defaultProps = {
    history: {},
    images: [],
    modal: {},
    setImagesAsync: () => {},
    setOpenModal: () => {},
    setCloseModal: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
