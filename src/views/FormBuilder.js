import React, { Component } from 'react';

import Card from '../components/Card/Card';
import AddComponent from '../components/FormComponents/AddComponent';

class FormBuilder extends Component {
	render() {
		let title = "Build your form";
		let description = "Use the following tools to build a custom form";

		return (
			<div className="form-builder">
				<Card title={title} description={description}>
					<AddComponent />
				</Card>
			</div>
		)
	}
}

export default FormBuilder;