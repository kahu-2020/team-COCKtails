import React, { Component } from "react";
import { searchByIngredient } from "../api";
import SearchIngredientResults from "./SearchIngredientResults";

class SearchIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
        drinks: null,
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
      searchByIngredient(this.state.ingredient).then(results => {
      this.setState({ drinks: results, });
    });
  };
  render() {
    return (
      <div className="search">
        <form action="/" method="POST" onSubmit={this.handleSubmit}>
          <label>Search by ingredient: &nbsp; </label>
          <input
            type="text"
            name="ingredient"
            placeholder="enter ingredient "
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="submit" />
        </form>
        {this.state.drinks && (
          <SearchIngredientResults data={this.state.drinks} />
        )}
      </div>
    );
  }
}
export default SearchIngredient;
