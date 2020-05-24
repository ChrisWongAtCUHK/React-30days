import React, { Component } from "react";

class Counter extends Component { // 1. 建立Class Component
  constructor(props) {  // 2. 初始化state並指定count初始值為0
    super(props);
    this.state = {  
      count: 0
    };
  }

  addCount = () => {  // 5. 處理click event
    this.setState({ count: this.state.count + 1 });
  }

  render() {  // 3.
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>點擊加一</button> {/* 4.設定點擊事件 */}
      </div>
    );
  }
}

export default Counter;