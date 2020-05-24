import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    React.createElement('div', null, 'Hello World!')
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
