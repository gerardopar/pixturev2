// default reducer state:
const searchPageDefaultState = {
    images: []
};

const searchPageReducer = (state = searchPageDefaultState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.images
            };

        case 'SET_IMAGES_SEARCHED':
            return {
                ...state,
                images: action.images
            };

        case 'SET_PAGINATION':
            return {
                ...state,
                images: action.images
            };
        
        default:
        return state;
    }
};

export default searchPageReducer;
