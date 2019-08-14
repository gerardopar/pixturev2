export const setImages = (images = [], tag = '') => ({
    type: 'SET_IMAGES',
    images: [...images],
    tag
});

export const setImagesAsync = () => dispatch => fetch('https://pixture.herokuapp.com/getPopularImages', {
    method: 'GET'
})
.then(data => data.json())
.then((data) => {
    const tag = {
        tag: data.trend
    };
    dispatch(setImages([...data.images], tag));
})
.catch(err => console.log(err));

// # sync action
export const setOpenModal = (modal = {}) => ({
    type: 'SET_OPEN_MODAL',
    modal
});

// # sync action
export const setCloseModal = () => ({
    type: 'SET_CLOSE_MODAL',
});
