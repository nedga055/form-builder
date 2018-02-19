import React, { Component } from 'react';

class NavLink extends Component {
	render() {
		const { text, route, iconClasses, active } = this.props;

		let listItemClass = (active) ? "active" : "";
		let icon = "";
		if(iconClasses) {
			icon = <i className={iconClasses}></i>;
		}

		return(
			<li className={listItemClass}>
				<a href={route}>{icon}{text}</a>
			</li>
		)
	}
}

export default NavLink;