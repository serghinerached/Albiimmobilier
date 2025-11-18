import {styles} from '../components/ComponentCss';
import {useState} from "react";

function DivPageAnnonceCreation({ onFilterClick }) {
  const [message, setMessage] = useState("");

  // Type
  const [selectedType, setSelectedType] = useState("");
  const tabLibType = ["Maison", "Appartement"];
  const handleSelectTypeChange = (event) => setSelectedType(event.target.value);
  

  // Type
  const [selectedChauffage, setSelectedChauffage] = useState("");
  const tabLibChauffage = ["Electrique", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const handleSelectChauffageChange = (event) => setSelectedChauffage(event.target.value);

  // Pieces
  const [selectedPieces, setSelectedPieces] = useState("");
  const handleSelectPiecesChange = (event) => setSelectedPieces(event.target.value);

  // Superficie
  const [selectedSuperficie, setSelectedSuperficie] = useState("");
  const handleSelectSuperficieChange = (event) => setSelectedSuperficie(event.target.value);

  // Prix
  const [selectedPrix, setSelectedPrix] = useState("");
  const handleSelectPrixChange = (event) => setSelectedPrix(event.target.value);


  // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleSubmit = async () => {
      if (!selectedType || !selectedChauffage || !selectedPieces || !selectedSuperficie || !selectedPrix) {
        setMessage("Merci de remplir tous les champs !");
        return;
      }
      alert("ok")
  /*
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
        */
    };


  //******************* 


  return  <div >
                    
            <table style={{border:"1px solid black",marginleft:"50px",padding:"10px"}}>

            <tr style={styles.trTableRecherche}>
              <td>Type</td>
              <td>
                <select onChange={(e) => setPseudo(e.target.value)}>
                  <option value=""></option>
                  {tabLibType.map((libType, index) => (
                    <option key={index} value={libType}>
                      {libType}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td>Chauffage</td>
              <td>
                <select onChange="">
                  <option value=""></option>
                  {tabLibChauffage.map((libChauffage, index) => (
                    <option key={index} value={libChauffage}>
                      {libChauffage}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td>Pièces</td>
              <td>
                <input type='text' size={5} ></input>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td style={{paddingRight:"6px"}}>Superficie</td>
              <td>
                <input type='text' size={10} ></input>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td>Prix</td>
              <td>
                <input type='text'></input>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td style={{columnSpan:"2"}}>
                <button style={{marginTop:"10px",...styles.btnOk}} 
                 onClick="" >Valider</button>
              </td>
            </tr>

            </table>

            
          </div>        
}

export default DivPageAnnonceCreation;
