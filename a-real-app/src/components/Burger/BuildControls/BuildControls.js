import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctr =>
            <BuildControl
                key={ctr.type}
                label={ctr.label}
                type={ctr.type}
                disabled={props.disabled[ctr.type]}
                added={() => props.ingredientAdded(ctr.type)}
                removed={() => props.ingredientRemoved(ctr.type)} />)}
        <button onClick={props.purchasing.bind()} className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
);

export default buildControls;