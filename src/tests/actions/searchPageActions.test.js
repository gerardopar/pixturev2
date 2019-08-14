import {
 setImages, 
 setImagesSearched, 
 setPagination
} from '../../actions/searchPageActions';

describe('redux actions', () => {
    test('should return default values for setting images', () => {
        const result = setImages();
        expect(result).toEqual({ type: 'SET_IMAGES', images: [] });
    });

    test('should return default values for setting images searched', () => {
        const result = setImagesSearched();
        expect(result).toEqual({ type: 'SET_IMAGES_SEARCHED', images: [] });
    });

    test('should return default values for setting pagination images', () => {
        const result = setPagination();
        expect(result).toEqual({ type: 'SET_PAGINATION', images: [] });
    });
});
