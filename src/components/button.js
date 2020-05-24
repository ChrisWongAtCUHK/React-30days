import React from 'react';

// class component
class Button extends React.Component { // 1. class Xxx extends React.Component {}
  render() { // 2. render() {...}
    return ( // 3. return {...}
      (<button>{this.props.text}</button>) // 4. this.props ...
    );
  }
}

export default Button;