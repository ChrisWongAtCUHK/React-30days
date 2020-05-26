import React from 'react';
import ReactDOM from 'react-dom';

import NameForm from "./src/components/name-form";

const App = () => {
  return (
    <div>
     <NameForm />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
