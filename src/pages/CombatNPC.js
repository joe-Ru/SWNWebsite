import React from "react"
import Layout from "../components/layout"

export default () => <Layout>
              <div>
  <div id="content">
    <h1>Click The Button Below To Obtain an NPC Made for Combat</h1>
    <select id="enemy">
      <option value="Tier1">Tier1</option>
      <option value="Tier2">Tier2</option>
      <option value="Tier3">Tier3</option>
      <option value="Tier4">Tier4</option>
    </select>
    <br />
    <br />
    <button type="generate" onclick="userInput();">
      Generate
    </button>
    <p id="HP" />
    <p id="Armor Class" />
    <p id="Atk" />
    <p id="Damage" />
    <p id="Weapon" />
    <p id="Move" />
    <p id="Morale" />
    <p id="Skills" />
    <p id="Saves" />
  </div>
</div>;

            </Layout>

