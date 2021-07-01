import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    }
  }


  toggleShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

  render() {
    const { isShown } = this.state;
    return (
      <div>
        <button onClick={this.toggleShown}>toggle</button>
        {isShown && <div>Text goes Here</div>}
      </div>
    )
  }
}

