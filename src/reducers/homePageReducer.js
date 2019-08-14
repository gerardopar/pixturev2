// default reducer state:
const homeDefaultState = {
    images: [],
    modal: {
        img: '',
        height: 0,
        hidden: true,
        likes: 0,
        user: '',
        views: 0,
        width: 0
    },
    tag: ''
};

const homeReducer = (state = homeDefaultState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.images,
                ...action.tag
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

export default homeReducer;
