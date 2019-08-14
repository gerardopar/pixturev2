import { setOpenModal, setCloseModal, setImages } from '../../actions/homePageActions';

describe('redux actions', () => {
    test('should return modal object with default values', () => {
        const result = setOpenModal();
        expect(result).toEqual({
            type: 'SET_OPEN_MODAL',
            modal: {}
        });
    });
    
    test('should return modal object with values', () => {
        const modalValues = {
            img: 'https://imgTestUrl.com',
            height: 400,
            likes: 50,
            hidden: false,
            user: 'http://userTestUrl.com',
            views: 1000,
            width: 250
        }; 
        const result = setOpenModal(modalValues);
        expect(result).toEqual({
        type: 'SET_OPEN_MODAL',
            modal: {
                img: 'https://imgTestUrl.com',
                height: 400,
                likes: 50,
                hidden: false,
                user: 'http://userTestUrl.com',
                views: 1000,
                width: 250
                } 
        });
    });
    
    test('should return modal object type', () => {
        const result = setCloseModal();
        expect(result).toEqual({ type: 'SET_CLOSE_MODAL' });
    });
    
    test('should return default values for setting images', () => {
        const result = setImages();
        expect(result).toEqual({ type: 'SET_IMAGES', images: [], tag: '' });
    });

    test('should return values for setting images', () => {
        const result = setImages([], 'summer');
        expect(result).toEqual({ type: 'SET_IMAGES', images: [], tag: 'summer' });
    });
});
