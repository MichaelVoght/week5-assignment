import React, { Component } from "react";
import Table from "react-bootstrap/table";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class HomePage extends Component {
  state = {
    isLoading: true,
    list: null,
    error: false,
    offset: 0,
    limit: 20,
  };

  componentDidMount() {
    this.buildPokemonList();
  }

  buildPokemonList = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${this.state.offset}&limit=${this.state.limit}"`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          list: data.results,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          error: true,
        });
      });
  };

  render() {
    const { list } = this.state;
    let pokemonList;
    if (list) {
      pokemonList = list.map((pokemon) => {
        return (
          <tr>
            <td>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </td>
          </tr>
        );
      });
    }

    return (
      <Table>
        <thead>
          <tr>
            <td>Pokemon</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemonList}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default withRouter(HomePage);
