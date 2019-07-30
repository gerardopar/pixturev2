// default reducer state:
const homeDefaultState = {
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
    }
}

const homeReducer = (state = homeDefaultState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: [...action.images]
            }

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
            }

        case 'SET_CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    ...state,
                    hidden: true
                }
            }
        
        default:
        return state;
    }
};

export default homeReducer;