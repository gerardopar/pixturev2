import {
 setOpenModal, 
 setCloseModal, 
 setImages, 
 setImagesSearched, 
 setPagination
} from '../../actions/searchPageActions';

describe('redux actions', () => {
    test('should return modal object with default values', () => {
        const result = setOpenModal();
        expect(result).toEqual({
            type: 'SET_OPEN_MODAL',
            modal: {}
        });
    });

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
    
    test('should return modal object type', () => {
        const result = setCloseModal();
        expect(result).toEqual({ type: 'SET_CLOSE_MODAL' });
    });
});
