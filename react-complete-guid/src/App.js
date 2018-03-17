import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[{name:'Max', age: 28}, {name:'Biet', age: 25}, {name:'Ironman', age: 50}]
  }

  switchNameHandler = (newName) =>{
    this.setState({ persons:[{name:newName, age: 28}, {name:'Biet', age: 55}, {name:'Cap', age: 50}]});
  }

  nameChangeHandler = (event) =>{
    this.setState({ persons:[{name:"Max", age: 28}, {name:event.target.value, age: 55}, {name:'Cap', age: 50}]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Tony Stark')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, "Maxmaximun")}
         change={this.nameChangeHandler}
         >My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
