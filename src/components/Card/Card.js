import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { title, description } = this.props;

		return(
			<div className="card">
				<div className="card-header">
					<h2>{title}<small>{description}</small></h2>
				</div>
				<div className="card-body card-padding">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Card;