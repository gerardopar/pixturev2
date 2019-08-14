// default reducer state:
const modalDefaultState = {
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

const modalReducer = (state = modalDefaultState, action) => {
    switch (action.type) {
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

export default modalReducer;
