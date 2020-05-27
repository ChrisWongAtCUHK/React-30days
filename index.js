import React from 'react';
import ReactDOM from 'react-dom';
import './src/styles/index.scss';

const App = () => {
  return (
    <div>
      <div className="block">
        <span className="title">Hello World!</span>
        <button className="button">按鈕</button>
      </div>
      <div className="image-background"></div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
