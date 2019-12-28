import React from "react"
import styles from "./style/style.css"
import { Link } from "gatsby"

export default ({children}) => 
    <div>
  <title>TableTop Dice Roller</title>
  <meta name="description" content="website description" />
  <meta name="keywords" content="website keywords, website keywords" />
  <meta httpEquiv="content-type" content="text/html; charset=windows-1252" />
  <link rel="stylesheet" type="text/css" href="style/style.css" />
  <div id="main">
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          {/* class="logo_colour", allows you to change the colour of the text */}
          <h1>
            <a href="index.html">
              SWN<span className="logo_colour"> Random Encounter Generator</span>
            </a>
          </h1>
          <h2 />
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">
          {/* put class="selected" in the li tag for the selected page - to highlight which page you're on 
    TODO: Put a drop down menu here*/}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CombatNPC/">Combat NPC</Link>
          </li>
          <li>
            <a href="OneRollNPC.html">One Roll NPC</a>
          </li>
          <li>
            <a href="OneRollPatron.html">One Roll Patron</a>
          </li>
          <li>
            <a href="OneRollUrbanEncounter.html">One Roll Urban Encounter</a>
          </li>
          <li>
            <a href="OneRollWildernessEncounter.html">
              One Roll Wilderness Encounter
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="site_content">
      <div className="sidebar">
        <h1>About</h1>
        <h4>Welcome</h4>
        <p>
          This website was designed for table top rollplayers and RPG nerds
          alike. If you have any suggestions or comments feel free to let me
          know what you think
        </p>
      </div>
      <div id="content">
        
        {children}
        <p />
      </div>
    </div>
    <div id="footer">
      <p>
        <a href="index.html">Home</a> | <a href="page.html">A Page</a> |{" "}
        <a href="another_page.html">Another Page</a> |{" "}
        <a href="contact.html">Contact Us</a>
      </p>
      <p>
        Copyright © night_sky_2 |{" "}
        <a href="http://validator.w3.org/check?uri=referer">HTML5</a> |{" "}
        <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> |{" "}
        <a href="http://www.html5webtemplates.co.uk">Website templates</a>
      </p>
    </div>
  </div>
</div>;