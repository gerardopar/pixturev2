// importing modules
import React from 'react';
import { shallow } from 'enzyme';
// importing components
import { HomePage } from '../../../components/pages/HomePage/HomePage';

describe('homePage props', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    test('renders homePage component with no props', () => {
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

    test('renders category tag with expected props ', () => {
        wrapper.setProps({ tag: 'summer' });
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders imageList with expected props ', () => {
        const images = [{ url: 'https://imageTesturl.com' }, { url: 'https://imageTesturl.com' }];
        wrapper.setProps({ images });
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
