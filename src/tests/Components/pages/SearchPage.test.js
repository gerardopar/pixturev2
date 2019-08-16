// importing components
import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage } from '../../../components/pages/SearchPage/SearchPage';

describe('renders SearchPage with expected props', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SearchPage />);
    });

    test('renders SearchPage with no props', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders image modal with expected props', () => {
        const modal = {
            img: 'https://imageTesturl.com',
            height: 100,
            hidden: false,
            likes: 1000,
            user: 'http://userTesturl.coom',
            views: 500,
            width: 200
        };
        wrapper.setProps({ modal });
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders imageList with expected props ', () => {
        const images = [{ url: 'https://imageTesturl.com' }, { url: 'https://imageTesturl.com' }];
        wrapper.setProps({ images });
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
