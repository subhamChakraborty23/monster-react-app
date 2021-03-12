import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  //life cycle methods
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  //lexical scoping -> arrow function: bind this to the context of the event
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
    //binding in react : refer docs
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <p>Search Monsters :</p>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
