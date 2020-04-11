import React from 'react';
import { shallow } from 'enzyme';
import SampleFeature from './index';

describe('Testing sample feature component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SampleFeature />);
    });

    test('Check component rendered', () => {
        expect(wrapper.text()).toContain('Sample Feature');
    });
});
