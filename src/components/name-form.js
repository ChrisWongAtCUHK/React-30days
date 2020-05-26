import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({'textValue': event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.textValue); // 3. 取得ref
    event.preventDefault(); // 昨天講到的避免瀏覽器默認行為，這邊的默認行為是form submit
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} value={this.state.textValue} /> {/* 1. 設定ref屬性 */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;