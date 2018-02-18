import React, { PureComponent, Fragment } from 'react';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import AppStyle from './App.css';
//Using PureComponent for better performance if the next and previous state is same
//it will not update
class App extends PureComponent {
  //Doing it ES6 with no constructor() or super() 
  state = {
    persons:
      [{ id: 'cbd', name: 'Bella', age: 21 },
      { id: 'kjk', name: 'Dory', age: 24 },
      { id: 'wop', name: 'Henry', age: 25 }],
    toggle: true
  };

  onChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const index = persons.findIndex ((val) => val.id === id) //Could have also worked by passing index directly 
    const person = {...persons[index]}
    person.name = event.target.value;
    persons[index] = person;
    this.setState ({
      persons : persons 
    })
  }
deleteOnClick = (index) => {
  const persons = [...this.state.persons]; //doing it immutabe way
  persons.splice(index,1);
  this.setState({
    persons : persons
  })
}

toggleHandler = () => {
  // console.log(this.state.toggle);
  //To avoid race condition as setState is async
  this.setState((prevState) => ({
    toggle: !(prevState.toggle)
  })
  )
}

componentWillMount(){
  console.log(`Component will Mount`);
}

componentDidMount(){
  console.log(`Component Did Mount`);
  // this.input.focus();
}

componentWillUnmount(){
  console.log(`Component will Unmount`);
}
//*** Using PureComponent so this wont execute ***
// shouldComponentUpdate(nextProp, nextState){
//   console.log(`Should Component Update`);
//  return true;
// }
componentWillUpdate(){
  console.log(`Component Will Update`);
}
componentDidUpdate(){
  console.log(`Component Did Update`);
}

  render() {
    const classes = [AppStyle.App];
    if(this.state.toggle){
      classes.push(AppStyle.Red)
    }
    return (
      <Fragment>
      <div className = {classes.join(' ')}>
        <button onClick = {this.toggleHandler}>Just Click</button>
        <h1>Advance React! Boom</h1>
        <button onClick ={this.toggleHandler}>Toggle</button>
        <ErrorBoundary>
        <Person persons = {this.state.persons} 
                toggleValue = {this.state.toggle}
                changeName = {this.onChangeHandler}
                clicked = {this.deleteOnClick}/>
        </ErrorBoundary>
        {/* <input ref = {(inp) => {this.input = inp}} type='text'/> */}
      </div>
      </Fragment>
    );
  }
}

export default App;
