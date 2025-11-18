// Fichier : DivPageInscription.js
import React, { useState } from "react";
import styles from '../components/ComponentCss';
import { supabase } from '../components/ReadSupabase/supabaseClient';
import DivPageVendre from './pageVendre';


function DivPageInscription() {
  // 🔹 États pour stocker les valeurs du formulaire
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid,setValid] = useState(false)

  // 🔹 Fonction appelée quand on clique sur "Valider"
  const handleSubmit = async () => {
    if (!pseudo || !email || !pwd) {
      setMessage("Merci de remplir tous les champs !");
      return;
    }

    try {
      // 👉 Insère dans la table "Account"
      const { data, error } = await supabase
        .from("Account")
        .insert([{ pseudo, email, pwd }]);

      if (error) throw error;
        setValid(true);
    } catch (err) {
      setValid(false);
      console.error(err);
      setMessage("❌ Erreur lors de l'inscription : " + err.message);
    }
  };


  if (valid === true) {
    return (
      <DivPageVendre tabLogin={[pseudo,pwd,email]}/>
    );
  } else {

  return (
    <div>
      <table
        style={{border: "1px solid black",marginLeft: "50px",padding: "10px",borderCollapse: "separate",borderSpacing: "0 10px",}}
      >
        <tbody>
          <tr>
            <td colSpan="2" style={{ textAlign: "center", paddingBottom: "10px" }}>
              <h3>Créer un compte</h3>
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: "10px" }}>Pseudo</td>
            <td>
              <input
                type="text"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                style={{ marginLeft: "10px",width:120 }}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginLeft: "10px",width:120 }}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: "10px",width:120 }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" >
              <button
                style={styles.btnValiderInscription} onClick={handleSubmit} >Valider
              </button>
            </td>
          </tr>
          {message && (
            <tr>
              <td colSpan="2" style={{ textAlign: "center", paddingTop: "10px" }}>
                {message}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
}

export default DivPageInscription;