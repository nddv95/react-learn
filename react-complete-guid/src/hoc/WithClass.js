import React, {Component} from 'react';

//Option 1
// const withClass = (props) =>{
//     return (<div className={props.classes}>{props.children}</div>);
// }

//Option 2
// const withClass = (WrappedComponent, className) =>{
//     return (props) => <div className={className}><WrappedComponent {...props}/></div>
// }

//Option 3
const withClass = (WrappedComponent, className) =>{
    return class extends Component{
        render(){
            return (<div className={className}><WrappedComponent {...this.props}/></div>);
        }
    };
}

export default withClass;