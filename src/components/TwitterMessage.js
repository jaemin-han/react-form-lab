import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
          
        <span>
          {this.props.maxChars - this.state.value.length}
        </span>
      </div>
    );
  }
}

TwitterMessage.prototypes = {
  maxChars: React.PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
