const React = require("react");

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name !== undefined ? props.name : "Yeti"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <input
        id= "controlledName"
    type = "text"
    value = { this.state.name }
    onChange = { this.handleChange }
      />
    );
  }
}

module.exports = Beast;
