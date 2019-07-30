export const setImagesAsync = () => { // # async action
    return (dispatch, getState) => {
        return fetch(`https://pixture.herokuapp.com/getPopularImages`, {
            method: 'GET'
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
export const setImages = (images) => { // set breakingNews via the async logic
    return {
        type: 'SET_IMAGES',
        images: [...images]
    }
};

// # sync action
export const setOpenModal = (imgUrl, height, width, user, views, likes) => { // set breakingNews via the async logic
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
export const setCloseModal = () => { // set breakingNews via the async logic
    return {
        type: 'SET_CLOSE_MODAL',
    }
};