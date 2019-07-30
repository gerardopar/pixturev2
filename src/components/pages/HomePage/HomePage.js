// importing modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// importing redux actions
import { setImagesAsync, setOpenModal, setCloseModal } from '../../../actions/homePageActions';
//importing assets 
import default_bk from '../../../assets/img/bk.jpg';
// importing components
import HeroNav from './Hero/HeroNav';
import HeroTitle from './Hero/HeroTitle';
import HeroSearchBar from './Hero/HeroSearchBar';
import ImageList from '../../UI/ImageList/ImageList';
import ImageModal from '../../UI/ImageModal/ImageModal';
import Spinner from '../../UI/spinner/Spinner';

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.setImagesAsync();
    }

    handleImageSearch = (e) => {
        e.preventDefault();
        let imageSearch = e.target.elements.imageSearched.value; // user input
        this.props.history.push(`/search/${imageSearch}?page=1`);
    }

    handleOpenModal = (imgUrl, height, width, user, views, likes) => {
        this.props.setOpenModal(imgUrl, height, width, user, views, likes);
    }

    handleCloseModal = () => {
        this.props.setCloseModal();
    }

    render(){
        return (
            <div>
                <div
                    style={{ backgroundImage: `url(${default_bk})` }}
                    className="hero">
                    <HeroNav />
                    <HeroTitle />
                    <HeroSearchBar 
                        handleImageSearch={this.handleImageSearch}
                    />
                </div>
                {
                    this.props.images.length > 0 ? 
                    <ImageList 
                    handleOpenModal={this.handleOpenModal}
                    images={this.props.images} /> : <Spinner />
                }
                {
                    this.props.modal.hidden 
                    ? null : 
                    <ImageModal 
                        {...this.props.modal}
                        handleCloseModal={this.handleCloseModal}/>
                }
            </div>
        );
    };
};

    // # redux state
    const mapStateToProps = (state) => {
        return {
            images: state.home.images,
            modal: state.home.modal
        }
    };
    
    // # redux actions
    const mapDispatchToProps = (dispatch) => {
        return {
            setImagesAsync: () => dispatch(setImagesAsync()),
            setOpenModal: (imgUrl, height, width, user, views, likes) => dispatch(setOpenModal(imgUrl, height, width, user, views, likes)),
            setCloseModal: () => dispatch(setCloseModal())
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));