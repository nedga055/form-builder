import React, { Component } from 'react';

class Header extends Component {
	render() {

		return(
			<header id="Header">
				<div className="header-inner">
					<div className="header-logo">
						<a href="/">Form Builder</a>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;