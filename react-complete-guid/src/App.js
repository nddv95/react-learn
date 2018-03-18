import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Biet', age: 25 },
      { id: 3, name: 'Ironman', age: 50 }],
    showPerson: false
  }

  deletePersonHandler = (pIndex) => {
    //let persons = this.state.persons;//bad practice because array reference type
    const persons = [...this.state.persons];
    persons.splice(pIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, pId) => {
    //get index person
    const personIndex = this.state.persons.findIndex(p => p.id === pId);
    //get person and change name without change state
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  showPersonHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  }

  render() {

    let persons = null;
    let buttonStyle = '';
    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, pIndex) =>
              <Person
                key={person.id}
                name={person.name}
                click={this.deletePersonHandler.bind(pIndex)}
                age={person.age}
                change={(event) => this.nameChangeHandler(event, person.id)} />)
          }
        </div>
      );
      buttonStyle=classes.Red;
    }

    const textStyle = [];
    if (this.state.persons.length <= 2) {
      textStyle.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      textStyle.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm react app</h1>
        <p className={textStyle.join(' ')}>This really working</p>
        <button className={buttonStyle} onClick={this.showPersonHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
