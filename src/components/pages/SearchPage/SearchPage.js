// importing modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
// importing redux actions
import {
 setImagesAsync, setOpenModal, 
        setCloseModal, setImagesSearchedAsync, setPaginationAsync 
} from '../../../actions/searchPageActions';

// importing components
import SearchHeader from './SearchHeader/SearchHeader';
import ImageList from '../../UI/ImageList/ImageList';
import ImageModal from '../../UI/ImageModal/ImageModal';
import Pagination from '../../UI/pagination/Pagination';
import MobileSearchBar from '../../UI/mobile/MobileSearchBar';
import Spinner from '../../UI/spinner/Spinner';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            tag: '' 
        };
    }

    componentDidMount() {
        const imageSearched = this.props.match.params.image;
        const parsedPageQuery = queryString.parse(this.props.location.search);

        this.setState({ page: Number(parsedPageQuery.page), tag: imageSearched });
        this.handleImageFetch(imageSearched);
    }

    handleImageFetch = (query) => {
        const parsedPageQuery = queryString.parse(this.props.location.search);
        this.props.setImagesAsync(query, parsedPageQuery);
    }

    handleImageSearch = (e) => {
        e.preventDefault();
        const imageSearch = e.target.elements.imageSearched.value; // user input
        const parsedPageQuery = queryString.parse(this.props.location.search); // query params

        this.props.setImagesSearchedAsync(imageSearch, parsedPageQuery);
        this.setState({ page: 1, tag: imageSearch });
        this.props.history.push(`/search/${imageSearch}?page=1`);

        document.getElementById('searchPage__form').reset();
        document.getElementById('mobileSearchBar__form').reset();
    }

    handleOpenModal = (imgUrl, height, width, user, views, likes) => {
        this.props.setOpenModal(imgUrl, height, width, user, views, likes);
    }

    handleCloseModal = () => {
        this.props.setCloseModal();
    }

    handlePagination = (direction) => {  
        const imageSearched = this.props.match.params.image;
        const parsedPageQuery = queryString.parse(this.props.location.search);

        if (direction === 'next') {
            this.setState(prevState => ({
                    page: Number(prevState.page) + 1
                }));
        } else if (direction === 'previous') {
            this.setState(prevState => ({
                    page: Number(prevState.page) - 1
                }));
        }

        parsedPageQuery.page = this.state.page;
        this.props.history.push(`/search/${imageSearched}?page=${this.state.page}`);
        this.props.setPaginationAsync(imageSearched, parsedPageQuery);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="searchPage">
                <SearchHeader handleImageSearch={this.handleImageSearch} />
                <MobileSearchBar handleImageSearch={this.handleImageSearch} />
                <div className="tag">
                    <div className="tag__wrap">
                        <p className="tag__title">
                            Free images of
                            {' '}
                            { this.state.tag }
                        </p>
                    </div>
                </div>
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
                    ? null : (
                    <ImageModal 
                      {...this.props.modal}
                      handleCloseModal={this.handleCloseModal} 
                    />
                    )
                }
                <Pagination 
                  handlePagination={this.handlePagination}
                  page={this.state.page}
                />
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
    setImagesAsync: (query, parsedPageQuery) => dispatch(setImagesAsync(query, parsedPageQuery)),
    setImagesSearchedAsync: (query, parsedPageQuery) => dispatch(setImagesSearchedAsync(query, parsedPageQuery)),
    setOpenModal: (imgUrl, height, width, user, views, likes) => dispatch(setOpenModal(imgUrl, height, width, user, views, likes)),
    setCloseModal: () => dispatch(setCloseModal()),
    setPaginationAsync: (query, parsedPageQuery) => dispatch(setPaginationAsync(query, parsedPageQuery))
});

SearchPage.propTypes = {
    history: PropTypes.objectOf(PropTypes.any),
    images: PropTypes.arrayOf(PropTypes.object),
    location: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.objectOf(PropTypes.any),
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
    setImagesSearchedAsync: PropTypes.func,
    setOpenModal: PropTypes.func,
    setPaginationAsync: PropTypes.func,
    setCloseModal: PropTypes.func
};

SearchPage.defaultProps = {
    history: {},
    images: [],
    location: {},
    match: {},
    modal: {},
    setImagesAsync: () => {},
    setImagesSearchedAsync: () => {},
    setOpenModal: () => {},
    setPaginationAsync: () => {},
    setCloseModal: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
