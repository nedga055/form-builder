import React, { Component } from 'react';

import NavLink from './NavLink';

class Nav extends Component {
	render() {
		const { pages } = this.props;
		return (
			<ul className="nav flex-column main-menu">
				{ pages.map((page) => {
					return(
						<NavLink key={page.id} text={page.title} route={page.route} iconClasses={page.classes} active={page.active} />
					)
				}) }
			</ul>
		)
	}
}

export default Nav;