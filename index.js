import React from 'react';
import ReactDOM from 'react-dom';

import Contact from "./src/components/contact";

const App = () => {
  return (
    <div>
     <Contact />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
