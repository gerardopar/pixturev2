// # sync action
export const setImages = (images = []) => ({
    type: 'SET_IMAGES',
    images: [...images]
});

// # async action
export const setImagesAsync = (query, parsedPageQuery) => dispatch => fetch('https://pixture.herokuapp.com/postImageQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageSearched: query,
            page: parsedPageQuery.page
        })
    })
    .then(data => data.json())
    .then((data) => {
        dispatch(setImages([...data.images]));
    })
    .catch(err => console.log(err));

// # sync action
export const setImagesSearched = (images = []) => ({
    type: 'SET_IMAGES_SEARCHED',
    images: [...images]
});

// # async action
export const setImagesSearchedAsync = (query, parsedPageQuery) => dispatch => fetch('https://pixture.herokuapp.com/postImageQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageSearched: query,
            page: parsedPageQuery.page
        })
    })
    .then(data => data.json())
    .then((data) => {
        dispatch(setImages([...data.images]));
    })
    .catch(err => console.log(err));

export const setPagination = (images = []) => ({
    type: 'SET_PAGINATION',
    images: [...images]
});

export const setPaginationAsync = (query, parsedPageQuery) => dispatch => fetch('https://pixture.herokuapp.com/postImageQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageSearched: query,
            page: parsedPageQuery.page
        })
    })
    .then(data => data.json())
    .then((data) => {
        dispatch(setImages([...data.images]));
    })
    .catch(err => console.log(err));


// # sync action
export const setOpenModal = (
    imgUrl = 0, 
    height = 0, 
    width = 0, 
    user = '', 
    views = 0, 
    likes = 0
) => ({
        type: 'SET_OPEN_MODAL',
        imgUrl,
        height,
        width,
        user,
        views,
        likes
    });

// # sync action
export const setCloseModal = () => ({
    type: 'SET_CLOSE_MODAL',
});
