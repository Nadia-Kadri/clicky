import React, { Component } from 'react';
import Header from './components/layout/Header';
import Score from './components/layout/Score';
import Animals from './components/Animals';
import './App.css';


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
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
      },
      {
        id: 5,
        name: 'arcticfox',
        imageURL: 'images/arcticfox.jpg',
        click: false
      },
      {
        id: 6,
        name: 'bunny',
        imageURL: 'images/bunny.jpg',
        click: false
      },
      {
        id: 7,
        name: 'cat',
        imageURL: 'images/cat.jpg',
        click: false
      },
      {
        id: 8,
        name: 'duck',
        imageURL: 'images/duck.jpg',
        click: false
      },
      {
        id: 9,
        name: 'hedgehog',
        imageURL: 'images/hedgehog.jpg',
        click: false
      },
      {
        id: 10,
        name: 'monkey',
        imageURL: 'images/monkey.jpg',
        click: false
      },
      {
        id: 11,
        name: 'pig',
        imageURL: 'images/pig3.jpg',
        click: false
      },
      {
        id: 12,
        name: 'puppy',
        imageURL: 'images/puppy.jpg',
        click: false
      }
    ]
  }

  onClick = (id) => {
    this.setState({ animals: this.state.animals.map(animal => {
      if(animal.id === id) {
        this.checkAnimal(animal)
      }
      return animal
    }) })
  }

  checkAnimal = (animal) => {
    if(animal.click === true) {
      alert("you lose")
      this.setState({ animals: this.state.animals.map(animal => {
        animal.click = false
        return animal
      }) })
    } else {
      animal.click = true
    }
  }

  // checkScore = (score, topScore) => {
  //   if(score > topScore) {
  //     this.setState({  })
  //   }
  // }

  render () {
    return (
      <div>
        <Header />
        <Score />
        <Animals onClick={this.onClick} animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
