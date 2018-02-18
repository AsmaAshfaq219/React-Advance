import React from 'react';
import PropTypes from 'prop-types';
import Persons from '../Persons';


const Person = (props) => {
  let personContent = '';
  if (props.toggleValue) {
    personContent = (<div> {props.persons.map((persons, i) => {
      return <Persons
        key={persons.id}
        name={persons.name}
        age={persons.age}
        changeName={(event) => props.changeName(event, persons.id)}
        clicked={() => props.clicked(i)}
      />

    })}
    </div>);
  }
  return personContent;
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changeName: PropTypes.func,
  clicked: PropTypes.func
}

export default Person;

