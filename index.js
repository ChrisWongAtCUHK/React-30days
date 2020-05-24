import React from 'react';
import ReactDOM from 'react-dom';
import Button from './src/components/button';

const App = () => {
  return (
    <div>
      Hello World!
      <Button text="按鈕按鈕"/>
      <Button text="按鈕排序二"/>
      <Button text="按鈕排序三"/>
      <Button text="按鈕排序四"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
