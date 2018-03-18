import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const textStyle = [];
    let buttonStyle = classes.Button;
    if(props.showPerson)
    {
        buttonStyle=[classes.Red, classes.Button].join(' ');
    }

    if (props.persons.length <= 2) {
      textStyle.push(classes.red);
    }

    if (props.persons.length <= 1) {
      textStyle.push(classes.bold);
    }

    return (
        <Aux>
            <h1>Hi I'm react app</h1>
            <p className={textStyle.join(' ')}>This really working</p>
            <button className={buttonStyle} onClick={props.click}>Toggle persons</button>
        </Aux>
    )
}

export default cockpit;