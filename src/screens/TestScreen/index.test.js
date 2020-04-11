import React from 'react';
import { shallow } from 'enzyme';
import TestScreen from './index';

let wrapper;

describe('Testing test screen component', () => {
    beforeEach(() => {
        wrapper = shallow(<TestScreen />);
    });

    test('Check component rendered', () => {
        expect(wrapper.text()).toContain('test');
    });
});
