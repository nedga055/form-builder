import React from 'react';
import {shallow} from 'enzyme';
import ComponentName from '../ComponentName';

describe('<ComponentName/>', () => {
	it('Machine name is generated properly', () => {
		const component = shallow(<ComponentName />);

		expect(component.find('.machine-name').text()).toEqual('');

		component.instance().updateName({ target: { value: 'This is my Component' } });
		let machineName = component.state().machineName;
		expect(machineName).toEqual('this-is-my-component');

		component.instance().updateName({ target: { value: 'this -- component' } });
		machineName = component.state().machineName;
		expect(machineName).toEqual('this-component');

		component.instance().updateName({ target: { value: 'my ! component' } });
		machineName = component.state().machineName;
		expect(machineName).toEqual('my-component');
	});

});