import React from 'react';

// Je suppose que votre objet 'styles' ressemble à ça.
// Vous pouvez l'adapter selon vos besoins.
const styles = {
  trTableRecherche: {
    // styles pour vos lignes
  },
  btnOk: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  }
};

function DivPageLogin({ onNavigateToInscription }) {

  const handleLinkClick = (event) => {
    event.preventDefault();
    onNavigateToInscription(); // On appelle la fonction du parent
  };

  
  return (
    <div>
      <table style={{ border: "1px solid black", marginLeft: "50px", padding: "10px", borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <tbody>
          <tr style={styles.trTableRecherche}>
            <td>Pseudo</td>
            <td>
              <input style={{marginLeft:"10px",width:120}} type="text" />
            </td>
          </tr>

          <tr style={styles.trTableRecherche}>
            <td>Password</td>
            <td>
              <input style={{marginLeft:"10px",width:120}} type="password" /> 
            </td>
          </tr>

          <tr style={styles.trTableRecherche}>
            {/* Correction : On utilise l'attribut 'colSpan' (pas dans le style) pour fusionner les colonnes */}
            <td colSpan="2">
              <button
                style={{ marginTop: "10px", ...styles.btnOk }}
                onClick={() => { alert('Bouton cliqué !'); }}
              >
                Connexion
              </button>
            </td>
          </tr>

          {/* NOUVELLE LIGNE AJOUTÉE ICI */}
          <tr style={styles.trTableRecherche}>
            <td colSpan="2" style={{ textAlign: "center", paddingTop: "10px" }}>
              <a href="#" onClick={handleLinkClick}>Inscription ?</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DivPageLogin;