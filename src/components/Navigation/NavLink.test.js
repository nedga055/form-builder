import React from 'react';
import {shallow} from 'enzyme';
import NavLink from './NavLink';

it('renders correctly', () => {
	const navLink = shallow(<NavLink text="Create Form" route="create-form" iconClasses="icon icon-fc-add" active={true} />);
	const link = <li className="nav-item"><a className="nav-link active" href="create-form"><i className="icon icon-fc-add"></i>Create Form</a></li>;
	expect(navLink.contains(link)).toEqual(true);
});

it('should render icon-fc-add', () => {
	const navLink = shallow(<NavLink text="Create Form" route="create-form" iconClasses="icon icon-fc-add" active={false} />);
	expect(navLink.find('.icon-fc-add')).toHaveLength(1);
});

it('should not render icons', () => {
	const navLink = shallow(<NavLink text="Create Form" route="create-form" active={false} />);
	expect(navLink.find('i')).toHaveLength(0);
});