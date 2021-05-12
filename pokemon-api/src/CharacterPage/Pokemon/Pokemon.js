import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/table";
import { Link } from "react-router-dom";

class Pokemon extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { name, sprites, types, stats, moves } = this.props.data;
    const moveSet = moves.map((move, index) => {
      return move.version_group_details[0].level_learned_at !== 0 ? (
        <tr>
          <td>{move.version_group_details[0].level_learned_at}</td>
          <td colSpan="2">{move.move.name}</td>
        </tr>
      ) : null;
    });
    const typesSet = types.map((type, index) => {
      return <td>{type.type.name}</td>;
    });
    const statsSet = stats.map((stat) => {
      return (
        <tr>
          <td>{stat.stat.name}</td>
          <td>{stat.base_stat}</td>
        </tr>
      );
    });

    return (
      <div>
        <Link to="/" className="back">
          Back
        </Link>
        <img src={sprites.other.dream_world.front_default} alt={name} />
        <Table>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <Table>
          <thead>
            <tr>
              <td colSpan="2">Type(s)</td>
            </tr>
          </thead>
          <tbody>
            <tr>{typesSet}</tr>
          </tbody>
        </Table>
        <br />
        <Table>
          <thead>
            <tr>
              <td>Stat Name</td>
              <td colSpan="2">Base Stats</td>
            </tr>
          </thead>
          <tbody>{statsSet}</tbody>
        </Table>
        <br />
        <Table>
          <thead>
            <tr>
              <td>Learned At</td>
              <td colSpan="2">Ability Learned</td>
            </tr>
          </thead>
          <tbody>{moveSet}</tbody>
        </Table>
      </div>
    );
  }
}

export default Pokemon;
