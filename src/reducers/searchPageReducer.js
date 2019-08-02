// default reducer state:
const searchPageDefaultState = {
    images: [],
};

const searchPageReducer = (state = searchPageDefaultState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: [...action.images]
            };

        case 'SET_IMAGES_SEARCHED':
            return {
                ...state,
                images: [...action.images]
            };

        case 'SET_PAGINATION':
            return {
                ...state,
                images: [...action.images]
            };

        case 'SET_OPEN_MODAL':
            return {
                ...state,
                modal: {
                    ...state,
                    img: action.imgUrl,
                    height: action.height,
                    hidden: action.hidden,
                    likes: action.likes,
                    tags: action.tags,
                    user: action.user,
                    views: action.views,
                    width: action.width
                }
            };

        case 'SET_CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    ...state,
                    hidden: true
                }
            };
        
        default:
        return state;
    }
};

export default searchPageReducer;
