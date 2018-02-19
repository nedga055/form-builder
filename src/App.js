import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/app.css';

// Components
import Header from './components/Header';
import Nav from './components/Navigation/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="main">
          <aside id="sidebar" className="sidebar">
            <Nav pages={PAGES} />
          </aside>
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
