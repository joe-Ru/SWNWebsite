import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"


class CombatNPC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Tier1',
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {

    if (this.state.value == 'Tier1') {

    }

    if (this.state.value == 'Tier2') {
      console.log("Tier 2 works");
    }

    if (this.state.value == 'Tier3') {
      console.log("Tier 3 works");
    }

    event.preventDefault();
    // alert('Your favorite flavor is: ' + this.state.value);
    // event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <p>Select a Combat NPC from the drop down menu</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="Tier1">Tier 1</option>
              <option value="Tier2">Tier 2</option>
              <option value="Tier3">Tier 3</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    );
  }
}


export default CombatNPC