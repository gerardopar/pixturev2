export const setImagesAsync = (query, parsedPageQuery) => { // # async action
    return (dispatch, getState) => {
        return fetch(`https://pixture.herokuapp.com/postImageQuery`, {
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
            dispatch(setImages([...data.images]));
        })
        .catch((err) => console.log(err));
    }
}
// # sync action
export const setImages = (images) => {
    return {
        type: 'SET_IMAGES',
        images: [...images]
    }
};

export const setImagesSearchedAsync = (query, parsedPageQuery) => { // # async action
    return (dispatch, getState) => {
        return fetch(`https://pixture.herokuapp.com/postImageQuery`, {
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
            dispatch(setImages([...data.images]));
        })
        .catch((err) => console.log(err));
    }
}
// # sync action
export const setImagesSearched = (images) => {
    return {
        type: 'SET_IMAGES_SEARCHED',
        images: [...images]
    }
};

export const setPaginationAsync = (query, parsedPageQuery) => {
    return (dispatch, getState) => {
        return fetch(`https://pixture.herokuapp.com/postImageQuery`, {
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
            dispatch(setImages([...data.images]));
        })
        .catch((err) => console.log(err));
    }
}

export const setPagination = (images) => {
    return {
        type: 'SET_PAGINATION',
        images: [...images]
    }
}

// # sync action
export const setOpenModal = (imgUrl, height, width, user, views, likes) => {
    return {
        type: 'SET_OPEN_MODAL',
        imgUrl,
        height,
        width,
        user,
        views,
        likes
    }
};

// # sync action
export const setCloseModal = () => {
    return {
        type: 'SET_CLOSE_MODAL',
    }
};