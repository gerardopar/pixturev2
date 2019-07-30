// importing modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

// importing components
import SearchHeader from '../SearchPage/SearchHeader/SearchHeader';
import ImageList from '../../UI/ImageList/ImageList';
import ImageModal from '../../UI/ImageModal/ImageModal';
import Pagination from '../../UI/pagination/Pagination';
import MobileSearchBar from '../../UI/mobile/MobileSearchBar';
import Spinner from '../../UI/spinner/Spinner';

class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            modal: {
                img: '',
                height: 0,
                hidden: true,
                likes: 0,
                tags: '',
                user: '',
                views: 0,
                width: 0
            },
            page: 1,
            tag: ''
        }
    }

    componentDidMount(){
        const imageSearched = this.props.match.params.image;
        const parsedPageQuery = queryString.parse(this.props.location.search);
        this.setState({ page: Number(parsedPageQuery.page), tag: imageSearched });
        this.handleImageFetch(imageSearched);
    }

    handleImageFetch = (query) => {
        const parsedPageQuery = queryString.parse(this.props.location.search);

        fetch(`https://pixture.herokuapp.com/postImageQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageSearched: query,
                page: parsedPageQuery.page
            })
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            this.setState({ images: data.images });
        })
        .catch((err) => console.log(err));
    }

    handleImageSearch = (e) => {
        e.preventDefault();
        const imageSearch = e.target.elements.imageSearched.value; // user input
        const parsedPageQuery = queryString.parse(this.props.location.search); // query params

        fetch(`https://pixture.herokuapp.com/postImageQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageSearched: imageSearch,
                page: parsedPageQuery.page
            })
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            this.setState({ images: data.images, page: 1, tag: imageSearch });
            this.props.history.push(`/search/${imageSearch}?page=1`);
            document.getElementById("searchPage__form").reset();
            document.getElementById("mobileSearchBar__form").reset();
        })
        .catch((err) => console.log(err));
    }

    handleOpenModal = (imgUrl, height, width, user, views, likes) => {
        this.setState({ modal : {
            hidden: false,
            img: imgUrl,
            height: height,
            likes: likes,
            user: user,
            views: views,
            width: width
        }});
    }

    handleCloseModal = () => {
        this.setState({
            modal: {
                hidden: true
            }
        })
    }

    handlePaginationNext = () => {  
        const imageSearched = this.props.match.params.image;
        const parsedPageQuery = queryString.parse(this.props.location.search);
        this.setState((prevState) => {
            return {
                page: Number(prevState.page) + 1
            }
        });
        parsedPageQuery.page = this.state.page;
        
        fetch(`https://pixture.herokuapp.com/postImageQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageSearched: imageSearched,
                page: parsedPageQuery.page
            })
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            this.props.history.push(`/search/${imageSearched}?page=${this.state.page}`);
            return data.images;
        })
        .then((images) => {
            window.scrollTo(0, 0);
            this.setState({ images: images });
        })
        .catch((err) => console.log(err));
    }

    handlePaginationPrev = () => {  
        const imageSearched = this.props.match.params.image;
        const parsedPageQuery = queryString.parse(this.props.location.search);
        this.setState((prevState) => {
            return {
                page: Number(prevState.page) - 1
            }
        });
        parsedPageQuery.page = this.state.page;
        
        fetch(`https://pixture.herokuapp.com/postImageQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageSearched: imageSearched,
                page: parsedPageQuery.page
            })
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            this.props.history.push(`/search/${imageSearched}?page=${this.state.page}`);
            return data.images;
        })
        .then((images) => {
            window.scrollTo(0, 0);
            this.setState({ images: images });
        })
        .catch((err) => console.log(err));
    }

    render(){
        return (
            <div className="searchPage">
                {/* searchpage header */}
                <SearchHeader handleImageSearch={this.handleImageSearch}/>
                <MobileSearchBar handleImageSearch={this.handleImageSearch}/>
                {/* searchpage content */}
                <div className="tag">
                    <div className="tag__wrap">
                        <p className="tag__title">Free images of { this.state.tag }</p>
                    </div>
                </div>
                {
                    this.state.images.length > 0 ? 
                    <ImageList 
                    handleOpenModal={this.handleOpenModal}
                    images={this.state.images}/> : <Spinner />
                }
                
                {
                    this.state.modal.hidden 
                    ? null : 
                    // image modal
                    <ImageModal 
                        {...this.state.modal}
                        handleCloseModal={this.handleCloseModal}/>
                }
                <Pagination 
                    handlePaginationNext={this.handlePaginationNext}
                    handlePaginationPrev={this.handlePaginationPrev}
                    page={this.state.page}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);