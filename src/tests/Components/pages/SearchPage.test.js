
import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage } from '../../../components/pages/SearchPage/SearchPage';

const searchPageProps = {
    modal: {
        img: 'https://imageTesturl.com',
        height: 100,
        hidden: false,
        likes: 1000,
        user: 'http://userTesturl.coom',
        views: 500,
        width: 200
    },
    images: [{ url: 'https://imageTesturl.com' }, { url: 'https://imageTesturl.com' }]
};

describe('renders SearchPage with expected props', () => {
    test('renders SearchPage with no props', () => {
        const wrapper = shallow(<SearchPage />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders image modal with expected props', () => {
        const wrapper = shallow(<SearchPage modal={searchPageProps.modal} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    test('renders imageList with expected props ', () => {
        const wrapper = shallow(<SearchPage images={searchPageProps.images} />);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
