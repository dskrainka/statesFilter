import React from 'react';
import './States.css';

class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      states: window.cs142models.statesModel(),
      filteredStates: [],
      input: ''
    };
    this.filterStates = this.filterStates.bind(this);
  }

  filterStates() {  
    this.setState({ input: event.target.value });
    this.setState({ filteredStates: this.state.states.filter(str => str.toLowerCase().includes(event.target.value)) });
    if (this.state.states.filter(str => str.toLowerCase().includes(event.target.value)) == false){
      this.setState({ filteredStates: ["No matches"]});
    }
  };

  render() {
    return (
      <div id="filter">
        <input type="text" value={this.state.input} onChange={this.filterStates} />
        {this.state.filteredStates.map(state => <li>{state}</li>)}
      </div>
    );
  }
}

export default States;
