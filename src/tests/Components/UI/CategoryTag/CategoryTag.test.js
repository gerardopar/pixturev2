import React from 'react';
import { shallow } from 'enzyme';
import CategoryTag from '../../../../components/UI/CategoryTag/CategoryTag';

describe('renders <CategoryTag /> component with correct props', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CategoryTag />);
    });

    test('should render tag without props', () => {
        expect(wrapper.find('.tag__title').text()).toEqual('Free images of ');
    });

    test('should render tag with props', () => {
        wrapper.setProps({ tag: 'Summer' });
        expect(wrapper.find('.tag__wrap')).toHaveLength(1);
        expect(wrapper.find('.tag__title')).toHaveLength(1);
        expect(wrapper.find('.tag__title').text()).toEqual('Free images of Summer');
    });
});
