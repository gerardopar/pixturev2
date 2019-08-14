// default reducer state:
const homeDefaultState = {
    images: [],
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
        
        default:
        return state;
    }
};

export default homeReducer;
