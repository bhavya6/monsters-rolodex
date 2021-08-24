import "./App.css";
import React, { Component } from "react";
import CardList from "./component/card-list/card-list";
import SearchBox from "./component/searchBox/searchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  //witout using arrow function in definintion we have to use bind in constructor for this function (handleChange)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const searchedVal = this.state.searchField;
    const monsters = this.state.monsters;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchedVal.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 className='heading'>Monsters Rolodex</h1>

        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        ></SearchBox>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

// setstate has a callback function which gets called after the state has been set. setstate is an asynchronous function. so when we want to print state after setting it may happen that we will get previous state because the event has not occured yet and it is running next lines of code as generally occurs in asynchronous functions.

//if we do not import {Component} from react in the above statement then we have to wrie React.Component below
