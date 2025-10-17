import {styles} from '../components/ComponentCss';
import React, { useState } from 'react';
import DivPageVendre from './pageVendre';
import DivPageInscription from './pageInscription';


//function DivPageLogin({handleLoginClick, onNavigateToInscription }) {
class DivPageLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabLoginSelect: [],
      chPseudo:null,
      chPwd:null,
      showVendre:false,
      showInscription: false, // <--- nouvelle clé d'état
    };
  }

  handleChangePseudo = (event) => {
    this.setState({ chPseudo: event.target.value });
  };

  handleChangePwd = (event) => {
    this.setState({ chPwd: event.target.value });
  };

  handleLoginClick = () => {
    const { chPseudo, chPwd } = this.state;
    const tabLogin = [chPseudo, chPwd];
    this.setState({
      tabLoginSelect: tabLogin,
      showVendre: true,
      showInscription: false,
    });
  };

  // Méthode pour afficher la page d'inscription
  handleLinkClick = (event) => {
    event.preventDefault(); // empêche le # de recharger / sauter
    this.setState({
      showInscription: true,
      showVendre: false,
    });
  };

  // Optionnel : méthode pour revenir au login depuis l'inscription ou vendre
  goToLogin = () => {
    this.setState({
      showInscription: false,
      showVendre: false,
    });
  };

  //-----------------

  render() {
    if (this.state.showVendre) {
      return (
        <DivPageVendre 
          onFilterClick={this.handleLoginClick} 
          tabLogin={this.state.tabLoginSelect} 
          onBack={this.goToLogin} // si besoin
        />
      );
    } 
    
    if (this.state.showInscription) {
      return (
        <DivPageInscription
          onBack={this.goToLogin} // ou autre prop pour revenir
        />
      );
    }
    
    // affichage du formulaire de login

      return (
        <div>
          <table
            style={{
              border: "1px solid black",
              marginLeft: "50px",
              padding: "10px",
              borderCollapse: "separate",
              borderSpacing: "0 10px",
            }}
          >
            <tbody>
              <tr style={styles.trTableRecherche}>
                <td>Pseudo</td>
                <td>
                  <input
                    style={{ marginLeft: "10px", width: 120 }}
                    type="text"
                    value={this.state.chPseudo}
                    onChange={this.handleChangePseudo}
                  />
                </td>
              </tr>

              <tr style={styles.trTableRecherche}>
                <td>Password</td>
                <td>
                  <input
                    style={{ marginLeft: "10px", width: 120 }}
                    type="password"
                    value={this.state.chPwd}
                    onChange={this.handleChangePwd}
                  />
                </td>
              </tr>

              <tr style={styles.trTableRecherche}>
                <td colSpan="2">
                  <button
                    style={{ marginTop: "10px", ...styles.btnLogin }}
                    onClick={this.handleLoginClick}
                  >
                    Connexion
                  </button>
                </td>
              </tr>

              <tr style={styles.trTableRecherche}>
                <td colSpan="2" style={{ textAlign: "center", paddingTop: "10px" }}>
                 {/* Utilise "this.handleLinkClick" et preventDefault dans la méthode */}
                  <a href="#" onClick={this.handleLinkClick}>
                    Inscription ?
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      );
    
  }
}

export default DivPageLogin;
