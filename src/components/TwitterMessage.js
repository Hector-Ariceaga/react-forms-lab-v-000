import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
      remainingChars: 140 
    };
  }

  handleInputChange = (e) => {
    this.setState({
      remainingChars: this.state.remainingChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e => this.handleInputChange(e)} value={this.state.maxChars}/>
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
