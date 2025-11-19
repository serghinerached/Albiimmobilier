import {styles} from '../components/ComponentCss';
import {useState} from "react";

function DivPageAnnonceCreation({ onFilterClick }) {
  const [message, setMessage] = useState("");

  // Type
  const [selectedType, setSelectedType] = useState("");
  const tabLibType = ["Maison", "Appartement"];
  const handleSelectTypeChange = (event) => setSelectedType(event.target.value);
  

  // chauffage
  const [selectedChauffage, setSelectedChauffage] = useState("");
  const tabLibChauffage = ["Electrique", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const handleSelectChauffageChange = (event) => setSelectedChauffage(event.target.value);

  // Pieces
  const [selectedPieces, setSelectedPieces] = useState("");
  const handleSelectPiecesChange = (event) => setSelectedPieces(event.target.value);

  // Superficie
  const [selectedSuperficie, setSelectedSuperficie] = useState("");
  const handleSelectSuperficieChange = (event) => setSelectedSuperficie(event.target.value);

   // dpe
  const [selectedDpe, setSelectedDpe] = useState("");
  const tabLibDpe = ["En cours", "A","B","C","D","E","F","G"];
  const handleSelectDpeChange = (event) => setSelectedDpe(event.target.value);

   // Ges
  const [selectedGes, setSelectedGes] = useState("");
  const tabLibGes = ["En cours", "A","B","C","D","E","F","G"];
  const handleSelectGesChange = (event) => setSelectedGes(event.target.value);

  // Prix
  const [selectedPrix, setSelectedPrix] = useState("");
  const handleSelectPrixChange = (event) => setSelectedPrix(event.target.value);


  // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleSubmit = async () => {
      if (!selectedType || !selectedChauffage || !selectedPieces || !selectedSuperficie || !selectedPrix
        || !selectedDpe || !selectedGes) {
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
                    
            <table style={{marginleft:"50px",padding:"10px"}}>

              <tr>
                <td style={{verticalAlign:"top"}}>
                  <table>
                    <tr style={styles.trTableRecherche}>
                      <td>Type</td>
                      <td>
                        <select onChange={handleSelectTypeChange}>
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
                        <select onChange={handleSelectChauffageChange}>
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
                        <input type='text' size={5} ></input> m2
                      </td>
                    </tr>

                    <tr style={styles.trTableRecherche}>
                      <td>DPE</td>
                      <td>
                        <select onChange={handleSelectDpeChange}>
                          <option value=""></option>
                          {tabLibDpe.map((libDpe, index) => (
                            <option key={index} value={libDpe}>
                              {libDpe}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr style={styles.trTableRecherche}>
                      <td>GES</td>
                      <td>
                        <select onChange={handleSelectGesChange}>
                          <option value=""></option>
                          {tabLibGes.map((libGes, index) => (
                            <option key={index} value={libGes}>
                              {libGes}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr style={styles.trTableRecherche}>
                      <td>Prix</td>
                      <td>
                        <input type='text' size={5}></input> €
                      </td>
                    </tr>

                  </table>
                </td>

                <td style={{verticalAlign:"top",paddingLeft:25}}>
                  <table>
                    <tr style={styles.trTableRecherche}>
                      <td style={{verticalAlign:"top",paddingRight:"10px"}}>+ d'infos</td>
                      <td>
                        <textarea rows="20" cols="100" />                   
                      </td>
                    </tr>

                  </table>
                </td>

                 <td style={{verticalAlign:"top",paddingLeft:10}}>
                    <button style={styles.btnOk}
                    onClick="" >Valider</button>
                  </td>
              </tr>
            </table>
          </div>        
}

export default DivPageAnnonceCreation;
