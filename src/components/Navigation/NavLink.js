import React, { Component } from 'react';

class NavLink extends Component {
	render() {
		const { text, route, iconClasses, active } = this.props;

		let listItemClass = (active) ? "nav-link active" : "nav-link";
		let icon = "";
		if(iconClasses) {
			icon = <i className={iconClasses}></i>;
		}

		return(
			<li className="nav-item">
				<a className={listItemClass} href={route}>{icon}{text}</a>
			</li>
		)
	}
}

export default NavLink;