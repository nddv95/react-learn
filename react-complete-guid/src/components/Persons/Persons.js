import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent{

  constructor(props){
    super(props);
    console.log('[Persons.js]', this.props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.click !== this.props.click
  //   || nextProps.change !== this.props.change;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[Update Persons.js] Inside componentDidUpdate');
  }

  render(){
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, pIndex) =>
    <Person
      key={person.id}
      name={person.name}
      click={this.props.click.bind(pIndex)}
      age={person.age}
      change={(event) => this.props.change(event, person.id)} />);
  }
}

export default Persons;