import React, { Component } from "react";
import { withRouter } from "react-router";
import Pokemon from "./Pokemon/Pokemon";

class CharacterPage extends Component {
  state = {
    isLoading: true,
    pokemon: null,
    error: false,
  };

  componentDidMount() {
    this.pokemonSearch();
  }

  componentDidUpdate(prevProps) {
    const oldPokemon = prevProps.match.params.pokemon;
    const incomingPokemon = this.props.match.params.pokemon;

    if (oldPokemon !== incomingPokemon) {
      this.userSearch();
    }
  }

  pokemonSearch = () => {
    const pokemon = this.props.match.params.pokemon;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          pokemon: data,
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
    const { isLoading, pokemon, error } = this.state;
    let content;
    if (pokemon) {
      content = <Pokemon data={pokemon}></Pokemon>;
    }
    return (
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error. Please refresh and try again</p>}
        {content}
      </div>
    );
  }
}

export default withRouter(CharacterPage);
