// Fichier : DivPageInscription.js
import React from 'react';

// Vous pouvez définir ou importer vos styles ici
const styles = {
    btnOk: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
    }
};

// Ce composant reçoit une fonction `onNavigateToLogin` via ses props
// pour pouvoir demander au composant parent de ré-afficher le login.
function DivPageInscription({ onNavigateToLogin }) {

  const handleLinkClick = (event) => {
    // On empêche le comportement par défaut du lien (qui rechargerait la page)
    event.preventDefault();
    // On exécute la fonction passée par le parent
    onNavigateToLogin();
  };

  return (
    <div>
      <table style={{ border: "1px solid black", marginLeft: "50px", padding: "10px", borderCollapse: "separate", borderSpacing: "0 10px" }}>
        <tbody>
          <tr>
            <td colSpan="2" style={{textAlign:"center", paddingBottom:"10px"}}><h3>Créer un compte</h3></td>
          </tr>
          <tr>
            <td style={{ paddingRight: "10px" }}>Pseudo</td>
            <td><input type="text" style={{marginLeft:"10px"}}/></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" style={{marginLeft:"10px"}}/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" style={{marginLeft:"10px"}}/></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button style={{ marginTop: "10px", ...styles.btnOk }}>S'inscrire</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default DivPageInscription;