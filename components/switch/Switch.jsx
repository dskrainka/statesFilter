import React from 'react'
import './Switch.css';
import States from './components/states/States';
import Example from './components/example/Example';

export const Switch = (props) => {
  let Output; // save the rendered JSX to return
  // check the type of the component given in props
  switch ( props.type ) {
    // render Type1 with props
    case 'States':
      Output = (<States />);
      break;
    // render Type2 with props
    case 'Example':
      Output = (<Example />);
      break;
    // unknown type ... output null to not render
    default:
      Output = (null); // to return nothing, use null
      break;
  }
  return Output; // return the output created in switch/case
};

export default Switch;