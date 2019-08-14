import { setImages } from '../../actions/homePageActions';

describe('homePage redux actions', () => {
    test('should return default values for setting images', () => {
        const result = setImages();
        expect(result).toEqual({ type: 'SET_IMAGES', images: [], tag: '' });
    });

    test('should return values for setting images', () => {
        const result = setImages([{ url: 'https://imageTestUrl.com' }], 'summer');
        expect(result).toEqual({ type: 'SET_IMAGES', images: [{ url: 'https://imageTestUrl.com' }], tag: 'summer' });
    });
});
