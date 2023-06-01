import React from 'react';

class Detective extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sherlock: 'психопат'
    };
  }

  render() {
    return (
      <div>
        <h2>Шерлок - {this.state.sherlock}</h2>
      </div>
    );
  }
}

export default Detective;