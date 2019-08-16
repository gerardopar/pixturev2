import React from 'react';
import { shallow } from 'enzyme';
// importing components
import { HomePage } from '../../../components/pages/HomePage/HomePage';

const homePageProps = {
    modal: {
        img: 'https://imageTesturl.com',
        height: 100,
        hidden: false,
        likes: 1000,
        user: 'http://userTesturl.coom',
        views: 500,
        width: 200
    },
    images: [{ url: 'https://imageTesturl.com' }, { url: 'https://imageTesturl.com' }],
    tag: 'summer'
};

describe('homePage props', () => {
    test('renders homePage component with no props', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
    
    test('renders image modal with expected props', () => {
        const wrapper = shallow(<HomePage modal={homePageProps.modal} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders category tag with expected props ', () => {
        const wrapper = shallow(<HomePage tag={homePageProps.tag} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders imageList with expected props ', () => {
        const wrapper = shallow(<HomePage images={homePageProps.images} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
