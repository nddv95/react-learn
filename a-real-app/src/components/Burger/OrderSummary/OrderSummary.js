import React from 'react';
import Aux from '../../../hoc/Auxa/Auxa';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => (
            <li key={key}>
                <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
            </li>
        ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancelPurchase} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continuePurchase} btnType="Success">CONTINUTE</Button>
        </Aux>
    );
};

export default orderSummary;