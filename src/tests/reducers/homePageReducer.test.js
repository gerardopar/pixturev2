import homeReducer from '../../reducers/homePageReducer';

describe('redux state', () => {
    test('should setup default state', () => {
        const state = homeReducer(undefined, { type: '@@INIT' });
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
            },
            tag: ''
        });
    });

    test('should setup array of images and category tag with default values', () => {
        const state = homeReducer(undefined, { type: 'SET_IMAGES' });
        expect(state.images).toBe(undefined);
        expect(state.tag).toBe('');
    });

    test('should setup modal with default values', () => {
        const state = homeReducer(undefined, { type: 'SET_OPEN_MODAL' });
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
        const state = homeReducer({ modal }, { type: 'SET_OPEN_MODAL' });
        expect(state.modal).toEqual(modal);
    });

    test('should set modal.hidden state to true', () => {
        const initialState = {
            modal: {
                hidden: false,
            }
        };
        const state = homeReducer(initialState, { type: 'SET_CLOSE_MODAL' });
        expect(state.modal.hidden).toBe(true);
    });
});
