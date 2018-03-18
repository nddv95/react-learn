import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js]', this.props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Aux >
                <p onClick={this.props.click}> I 'm {this.props.name} and I'm {this.props.age}years old </p>
                <input ref={(inp)=>this.inputElement = inp}type='text' onChange={this.props.change} value={this.props.name} />
            </Aux>
        );

        // return [
        //         <p onClick={this.props.click}> I 'm {this.props.name} and I'm {this.props.age}years old </p>,
        //         <input type='text' onChange={this.props.change} value={this.props.name} />
        // ];
    }
}

Person.protoTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    change: PropTypes.func
}

export default withClass(Person, classes.Person);