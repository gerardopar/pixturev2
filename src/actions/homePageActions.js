// # sync action
export const setImages = images => ({
    type: 'SET_IMAGES',
    images: [...images]
});

export const setImagesAsync = () => dispatch => fetch('https://pixture.herokuapp.com/getPopularImages', {
            method: 'GET'
        })
        .then(data => data.json())
        .then((data) => {
            dispatch(setImages([...data.images]));
        })
        .catch(err => console.log(err));

// # sync action
export const setOpenModal = (imgUrl, height, width, user, views, likes) => ({
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
