import React from 'react';
import PersonStyle from './Persons.css';
import Wrapper from '../../hoc/Wrapper';

const Persons = (props) => {
    return(
        <div>
        <button onClick = {props.clicked}>x</button>  
        <p>Hello {props.name}, your age is {props.age}</p>
        <input type='text' value={props.name}  onChange= {props.changeName}/>
        </div>
    );
}

//Higher Order Component 
export default Wrapper(Persons, PersonStyle.Persons)