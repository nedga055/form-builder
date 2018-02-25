import React, { Component } from 'react';
import './assets/css/app.css';

// Components
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import PageTitle from './components/PageTitle/PageTitle';

// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

// Views
import FormBuilder from './views/FormBuilder';

class App extends Component {
  render() {
	  const currentPage = PAGES[0];
    return (
		<div className="App">
			<Header />
			<section id="main">
				<aside id="sidebar" className="sidebar">
					<Nav pages={PAGES} />
				</aside>
				<section id="content">
				    <Grid fluid={true}>
				        <Row>
				            <Col sm={12}>
				                <PageTitle title={currentPage.title} />
				                <FormBuilder />
				            </Col>
				        </Row>
				    </Grid>
				</section>
			</section>
		</div>
    );
  }
}

const PAGES = [{
    id: 1,
    title: 'Create Form',
    classes: 'icon icon-fc-add',
    route: 'create-form',
    active: true
},{
    id: 2,
    title: 'Submit Form',
    classes: 'icon icon-fc-library_books',
    route: 'submit-form',
    active: false
},{
    id: 3,
    title: 'Results',
    classes: 'icon icon-fc-trending_up',
    route: 'results',
    active: false
}];

export default App;
