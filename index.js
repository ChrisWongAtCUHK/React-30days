import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './src/components/counter';  // 匯入Counter

const App = () => {
  return (
    <div>
      <Counter/> { /* 使用Counter component */}
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
