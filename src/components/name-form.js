import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();  // 2. 使用React.createRef()
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value); // 3. 取得ref
    event.preventDefault(); // 昨天講到的避免瀏覽器默認行為，這邊的默認行為是form submit
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} /> {/* 1. 設定ref屬性 */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;