import searchPageReducer from '../../reducers/searchPageReducer';

describe('redux state', () => {
    test('should setup default state', () => {
        const state = searchPageReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({
            images: []
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
});
