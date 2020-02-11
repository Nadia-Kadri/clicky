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
        imageURL: 'images/deer.jpg',
        click: false
      },
      {
        id: 2,
        name: 'elephant',
        imageURL: 'images/elephant.jpg',
        click: false
      },
      {
        id: 3,
        name: 'lion',
        imageURL: 'images/lion.jpg',
        click: false
      },
      {
        id: 4,
        name: 'turtle',
        imageURL: 'images/turtle.jpg',
        click: false
      }
    ]
  }

  onClick = (id) => {
    console.log(id)
    this.setState({ animals: this.state.animals.map(animal => {
      if(animal.id === id) {
        animal.click = true
      }
      return animal
    }) })
    console.log(this.state.animals)
  }

  render () {
    return (
      <div>
        <Header />
        <Animals onClick={this.onClick} animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;