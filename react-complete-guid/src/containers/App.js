import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Biet', age: 25 },
        { id: 3, name: 'Ironman', age: 50 }],
      showPerson: false,
      toggleClicked:0
    }
    console.log('[App.js]', this.props);
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPerson !== this.state.showPerson;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate');
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
    //be careful when use this state in setState, because acsynchronous
    this.setState((preState, props)=> { return {showPerson: !isShow, toggleClicked: preState.toggleClicked + 1} });
  }

  render() {
    console.log('[App.js] Inside render')
    let persons = null;
    if (this.state.showPerson) {
      persons = <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler}/>;
      
    }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPerson:true});}}>Show person</button>
        <Cockpit
          persons={this.state.persons}
          click={this.showPersonHandler}
          showPersons={this.state.showPerson}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
