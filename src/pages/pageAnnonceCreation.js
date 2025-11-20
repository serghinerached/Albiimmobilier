import {styles} from '../components/ComponentCss';
import {useState} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';
import DivPageVendre from './pageVendre';


function DivPageAnnonceCreation({ onFilterClick }) {
  const [message, setMessage] = useState("");
  const [valid,setValid] = useState(false)

  // Type
  const [type, setType] = useState("");
  const tabLibType = ["Maison", "Appartement"];
  const handleTypeChange = (event) => setType(event.target.value);
  

  // chauffage
  const [chauffage, setChauffage] = useState("");
  const tabLibChauffage = ["Electrique", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const handleChauffageChange = (event) => setChauffage(event.target.value);

  // Pieces
  const [pieces, setPieces] = useState("");
  const handlePiecesChange = (event) => setPieces(event.target.value);

  // Superficie
  const [superficie, setSuperficie] = useState("");
  const handleSuperficieChange = (event) => setSuperficie(event.target.value);

   // dpe
  const [dpe, setDpe] = useState("");
  const tabLibDpe = ["En cours", "A","B","C","D","E","F","G"];
  const handleDpeChange = (event) => setDpe(event.target.value);

   // Ges
  const [ges, setGes] = useState("");
  const tabLibGes = ["En cours", "A","B","C","D","E","F","G"];
  const handleGesChange = (event) => setGes(event.target.value);

  // Prix
  const [infos, setInfos] = useState("");
  const handleInfosChange = (event) => setInfos(event.target.value);

  // Prix
  const [prix, setPrix] = useState("");
  const handlePrixChange = (event) => setPrix(event.target.value);


  // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleSubmit = async () => {
      if (!type  || !chauffage || !pieces || !superficie || !dpe || !ges || !infos || !prix) {
        setMessage("Merci de remplir tous les champs !");
        return;
      }
  
      try {
        // 👉 Insère dans la table "Account"
        const { data, error } = await supabase
          .from("Annonce")
          .insert([{type:type,chauffage:chauffage,pieces: pieces,superficie: superficie, prix:prix,infos:infos,dpe: dpe,ges:ges,pseudo:"mimi",valide:"En cours" }]);
  
        if (error) throw error;
          setValid(true);

      } catch (err) {
        setValid(false);
        console.error("ERROR :" + err.message);
        setMessage("❌ Erreur lors de la creation : " + err.message);
      }
    };


  //******************* 

   if (valid === true) {
    return (
      <DivPageVendre tabLogin={["mimi","xxx","yyyy"]}/>
    ); 
  } else {

    return  <div >
                      
              <table style={{marginleft:"50px",padding:"10px"}}>

                <tr>
                  <td style={{verticalAlign:"top"}}>
                    <table>
                      <tr style={styles.trTableRecherche}>
                        <td>Type</td>
                        <td>
                          <select onChange={handleTypeChange}>
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
                          <select onChange={handleChauffageChange}>
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
                          <input type='text' size={5} onChange={handlePiecesChange}></input>
                        </td>
                      </tr>

                      <tr style={styles.trTableRecherche}>
                        <td style={{paddingRight:"6px"}}>Superficie</td>
                        <td>
                          <input type='text' size={5} onChange={handleSuperficieChange}></input> m2
                        </td>
                      </tr>

                      <tr style={styles.trTableRecherche}>
                        <td>DPE</td>
                        <td>
                          <select onChange={handleDpeChange}>
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
                          <select onChange={handleGesChange}>
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
                          <input type='text' size={5} onChange={handlePrixChange}></input> €
                        </td>
                      </tr>

                    </table>
                  </td>

                  <td style={{verticalAlign:"top",paddingLeft:25}}>
                    <table>
                      <tr style={styles.trTableRecherche}>
                        <td style={{verticalAlign:"top",paddingRight:"10px"}}>+ d'infos</td>
                        <td>
                          <textarea rows="20" cols="100" onChange={handleInfosChange}/>                   
                        </td>
                      </tr>

                    </table>
                  </td>

                  <td style={{verticalAlign:"top",paddingLeft:10}}>
                      <button style={styles.btnOk}
                      onClick={handleSubmit} >Valider</button>
                    </td>
                </tr>
              </table>
            </div>        
  }
}

export default DivPageAnnonceCreation;
