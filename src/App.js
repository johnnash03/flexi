import React, { Component } from 'react';
import Flexi from './Flexi';
import './App.css';

const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's name",
      type: "TextField"
    },
    {
      name: "city_name",
      label: "City's name",
      type: "TextField"
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: [
        "Maharashtra",
        "Karnataka",
        "Tamil Nadu"
      ]
    }
  ]
}

class App extends Component {
  onFlexiSubmit = (data) => {
    console.log("data", data);
  } 
  render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />
      </div>
    );
  }
}

export default App;
