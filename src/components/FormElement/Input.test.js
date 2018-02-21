import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('<Input/>', () => {
	it('input rendered correctly', () => {
		const component = renderer.create(
			<Input id="add-component" name="add-component" placeholder="Add a new component" label="Add a new component" />
		);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('focus changes wrapper class', () => {
		const wrapper = shallow(<Input id="add-component" name="add-component" placeholder="Add a new component" label="Add a new component" />);

		expect(wrapper.find('.fg-line').hasClass('fg-toggled')).toEqual(false);

		wrapper.find('input').simulate('focus');
		expect(wrapper.find('.fg-line').hasClass('fg-toggled')).toEqual(true);

		wrapper.find('input').simulate('blur');
		expect(wrapper.find('.fg-line').hasClass('fg-toggled')).toEqual(false);
	});
});