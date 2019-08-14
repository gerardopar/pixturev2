import searchPageReducer from '../../reducers/searchPageReducer';

describe('redux state', () => {
    test('should setup default state', () => {
        const state = searchPageReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
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
        });
    });

    test('should setup array of images with default values', () => {
        const state = searchPageReducer(undefined, { type: 'SET_IMAGES' });
        expect(state.images).toBe(undefined);
    });

    test('should setup array of images searched with default values', () => {
        const state = searchPageReducer(undefined, { type: 'SET_IMAGES_SEARCHED' });
        expect(state.images).toBe(undefined);
    });

    test('should setup array of images based on pagination', () => {
        const state = searchPageReducer(undefined, { type: 'SET_PAGINATION' });
        expect(state.images).toBe(undefined);
    });
    
    test('should setup modal with default values', () => {
        const state = searchPageReducer(undefined, { type: 'SET_OPEN_MODAL' });
        expect(state.modal).toEqual({
            img: '',
            height: 0,
            hidden: false,
            likes: 0,
            user: '',
            views: 0,
            width: 0
        });
    });
    
    test('should setup modal with values', () => {
        const modal = {
            img: 'https://imgTestUrl.com',
            height: 400,
            likes: 50,
            hidden: false,
            user: 'http://userTestUrl.com',
            views: 1000,
            width: 250
        };
        const state = searchPageReducer({ modal }, { type: 'SET_OPEN_MODAL' });
        expect(state.modal).toEqual(modal);
    });
    
    test('should set modal to hidden', () => {
        const initialModalState = {
            modal: {
                hidden: false,
            }
        };
        const state = searchPageReducer(initialModalState, { type: 'SET_CLOSE_MODAL' });
        expect(state.modal.hidden).toBe(true);
    });
});
