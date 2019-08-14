import homeReducer from '../../reducers/homePageReducer';

describe('redux state', () => {
    test('should setup default state', () => {
        const state = homeReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
            images: [],
            tag: ''
        });
    });

    test('should setup array of images and category tag with default values', () => {
        const state = homeReducer(undefined, { type: 'SET_IMAGES' });
        expect(state.images).toBe(undefined);
        expect(state.tag).toBe('');
    });
});
