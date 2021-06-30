import React from "react";

class ClassComponent extends React.Component {
  state = {
    number: 0,
  };

  randomizeNumber = () => {
    const newValue = Math.round(Math.random() * 100);
    this.setState({
      number: newValue,
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div className="row">
        <h3>ClassComponent - {number}</h3>
        <button onClick={this.randomizeNumber} className="btn btn-primary">
          randomizeNumber
        </button>
      </div>
    );
  }
}

export default ClassComponent;
