// default reducer state:
const searchPageDefaultState = {
    images: [],
    modal: {
        img: '',
        height: 0,
        hidden: true,
        likes: 0,
        user: '',
        views: 0,
        width: 0
    }
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

        case 'SET_OPEN_MODAL':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    ...action.modal,
                    hidden: false
                }
            };

        case 'SET_CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    ...state.modal,
                    hidden: true
                }
            };
        
        default:
        return state;
    }
};

export default searchPageReducer;
