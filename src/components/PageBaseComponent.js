import React, { useState } from "react";
import {styles} from './ComponentCss';
import "./Navbar.css";
import DivPageHomeBottomLeft from "../pages/pageHomeBottomLeft";
import DivPageHomeBottomCenter from "../pages/pageHomeBottomCenter";
import DivPageHomeBottomRight from "../pages/pageHomeBottomRight";

import { Link } from "react-router-dom";

//--------------------------

const fToday = () => {
  const dateTodayString = new Date().toLocaleDateString("fr-FR") ;
  return dateTodayString;
};

const fCurrentTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const currentTime = today.toLocaleTimeString("fr-FR", { hour: 'numeric', hour12: false, minute: 'numeric' });
  return currentTime;
};

//---------------------------

  class PageBaseComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedText: [], // 👉 on stocke ici le texte cliqué
    };
  }

  handleTextClick  = (row) => {
    this.setState({ selectedText: row }); // 👉 met à jour l’état
  };

      render () {   
  
  return (

    <div style={styles.divHomeGeneral}>  

      <div style={styles.divHomeHaut}>  

        <div style={{display: "flex", flex: 1

        }}>
          <h1 style={{marginLeft:"700px",flex:1,color:"black", fontWeight:"bold"}}>ALBIIMMOBILIER (React)</h1>

          <h3 style={{flex:1,textAlign:"right", color: "black", fontWeight:"bold"}}>{fToday()}  {fCurrentTime()}</h3>
        </div>

        <nav className="navbar">
          <div className="navbar-container">
            <ul className="nav-links" >
              <li>
                <Link style={{fontWeight:"bold"}} to="/">Accueil</Link>
              </li>
              <li>
                <Link style={{fontWeight:"bold"}} to="/about">Vendre</Link>
              </li>
              <li>
                <Link style={{fontWeight:"bold"}} to="/services">Mon compte</Link>
              </li>
              <li>
                <Link style={{fontWeight:"bold"}} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>

      <div style={{display: "flex", flex: 1}}>

        <div style={styles.divHomeBottomLeft}>
          <DivPageHomeBottomLeft/>
        </div>

        <div style={styles.divHomeBasCentre}>
          <DivPageHomeBottomCenter onTextClick={this.handleTextClick}/>
        </div>

        <div style={styles.divHomeBasRight}  >
          <DivPageHomeBottomRight text={this.state.selectedText}/>
        </div>

      </div>
      
    </div>
  );
}

}; 

export default PageBaseComponent;
  