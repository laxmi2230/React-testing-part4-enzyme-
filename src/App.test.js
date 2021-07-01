import React from 'react';
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


import App from "./App";

configure({ adapter: new Adapter() });

describe("My Component", () => {
    it('should show text', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('div div');
        expect(text.text()).toBe("Text goes Here");
    });
    it('should hide text when button is clicked', () => {
        const wrapper = shallow(<App />);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div div');
        expect(text.length).toBe(0);
    })
})

