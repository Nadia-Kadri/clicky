import React, { Component } from 'react';
import Header from './components/layout/Header';
import Animals from './components/Animals';
import './App.css';


class App extends Component {
  state = {
    animals: [
      {
        id: 1,
        name: 'deer',
        imageURL: '../../public/images/deer.jpg',
        click: false
      },
      {
        id: 2,
        name: 'elephant',
        imageURL: '../../public/images/elephant.jpg',
        click: false
      },
      {
        id: 3,
        name: 'lion',
        imageURL: '../../public/images/lion.jpg',
        click: false
      },
      {
        id: 4,
        name: 'turtle',
        imageURL: '../../public/images/turtle.jpg',
        click: false
      }
    ]
  }

  render () {
    return (
      <div>
        <Header />
        <Animals animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
