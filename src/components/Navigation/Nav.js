import React, { Component } from 'react';

import NavLink from './NavLink';

class Nav extends Component {
	render() {
		const { pages } = this.props;
		return (
			<div className="nav nav-vertical">
				<ul className="main-menu">
					{ pages.map((page) => {
						return(
							<NavLink key={page.id} text={page.title} route={page.route} iconClasses={page.classes} active={page.active} />
						)
					}) }
				</ul>
			</div>
		)
	}
}

export default Nav;