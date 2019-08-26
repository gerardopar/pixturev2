import React from 'react';
import { shallow } from 'enzyme';
import ImageList from '../../../../components/UI/ImageList/ImageList';
import ImageListItem from '../../../../components/UI/ImageList/ImageListItem';

describe('renders <ImageList /> component with correct props', () => {
    let wrapper;
    const images = [{
        url: 'http://someTestUrl.com',
        id: 1
    },{
        url: 'http://someTestUrl.com',
        id: 2
    }];

    beforeEach(() => {
        wrapper = shallow(<ImageList />);
    });

    test('should render imageList with props', () => {
        wrapper.setProps({ images: images });
        expect(wrapper.find(ImageListItem)).toHaveLength(2);
    });

    test('should not render imageList with props', () => {
        wrapper.setProps({ images: [] });
        expect(wrapper.find(ImageListItem)).toHaveLength(0);
    });
});
