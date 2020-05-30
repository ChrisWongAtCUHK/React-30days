import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions";

class NewTodo extends PureComponent {  //  1.
  constructor(props) {  // 2.
    super(props);
    this.state = {
      todoVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(e) {  // 3.
    this.setState({
      todoVal: e.target.value
    });
  }

  handleSubmit(e) {  // 4. props的function來自父層<App/>
    e.preventDefault();
    if(this.state.todoVal) {  // 5. 判斷todoVal是否有值
      this.props.addNewTodo(this.state.todoVal);
      this.setState({ todoVal: "" });  // 6. 重置input
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          className="form-text"
          value={this.state.todoVal}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(null, { addNewTodo })(NewTodo);
