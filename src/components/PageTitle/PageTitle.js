import React, { Component } from 'react';

class PageTitle extends Component {
	render() {
		const { title } = this.props;

		return (
			<h1 className="page-title">{title}</h1>
		)
	}
}

export default PageTitle;