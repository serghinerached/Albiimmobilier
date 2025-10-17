// Fichier : DivPageInscription.js
import React, { useState } from "react";
import styles from '../components/ComponentCss';
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageInscription() {
  // 🔹 États pour stocker les valeurs du formulaire
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Fonction appelée quand on clique sur "Valider"
  const handleSubmit = async () => {
    if (!pseudo || !email || !password) {
      setMessage("Merci de remplir tous les champs !");
      return;
    }

    try {
      // 👉 Insère dans la table "Account"
      const { data, error } = await supabase
        .from("Account")
        .insert([{ pseudo, email, password }]);

      if (error) throw error;
      setMessage("✅ Compte créé avec succès !");
      setPseudo("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Erreur lors de l'inscription : " + err.message);
    }
  };

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
                style={{ marginLeft: "10px" }}
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
                style={{ marginLeft: "10px" }}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={styles.btnValiderInscription}>
              <button
                style={styles.btnValiderInscription}
                onClick={handleSubmit}
              >
                Valider
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

export default DivPageInscription;