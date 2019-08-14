import {
 setImages, 
 setImagesSearched, 
 setPagination
} from '../../actions/searchPageActions';

describe('redux actions', () => {
    test('should return values for setting images', () => {
        const result = setImages([{ url: 'https://imageTestUrl.com' }], 'summer');
        expect(result).toEqual({ type: 'SET_IMAGES', images: [{ url: 'https://imageTestUrl.com' }] });
    });

    test('should return default values for setting images searched', () => {
        const result = setImagesSearched();
        expect(result).toEqual({ type: 'SET_IMAGES_SEARCHED', images: [] });
    });

    test('should return values for setting images based on pagination', () => {
        const result = setPagination([{ url: 'https://imageTestUrl.com' }]);
        expect(result).toEqual({ type: 'SET_PAGINATION', images: [{ url: 'https://imageTestUrl.com' }] });
    });
    test('should return default values for setting images based on pagination', () => {
        const result = setPagination();
        expect(result).toEqual({ type: 'SET_PAGINATION', images: [] });
    });
});
