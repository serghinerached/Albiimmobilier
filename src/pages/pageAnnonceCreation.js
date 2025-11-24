import {styles} from '../components/ComponentCss';
import {useState} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';
import DivPageVendre from './pageVendre';


function DivPageAnnonceCreation({datas}) {

  const pseudo = datas[0];
  const row = datas[1];
  const mode = datas[2]; // create or update

  const [message, setMessage] = useState("");
  const [valid,setValid] = useState(false)

  const [type, setType] = useState(row.type);
  const tabLibType = ["Maison", "Appartement"];
  const [chauffage, setChauffage] = useState(row.chauffage);
  const tabLibChauffage = ["Electrique", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const [pieces, setPieces] = useState(row.pieces);
  const [superficie, setSuperficie] = useState(row.superficie);
  const [dpe, setDpe] = useState(row.dpe);
  const tabLibDpe = ["En cours", "A","B","C","D","E","F","G"];
  const [ges, setGes] = useState(row.ges);
  const tabLibGes = ["En cours", "A","B","C","D","E","F","G"];
  const [infos, setInfos] = useState(row.infos);
  const [prix, setPrix] = useState(row.prix);
  const [chValid,setChValid] = useState(row.valide);
  const tabLibValid = ["En cours", "Oui"];


  // if change
  const handleTypeChange = (event) => setType(event.target.value);
  const handleChauffageChange = (event) => setChauffage(event.target.value);
  const handlePiecesChange = (event) => setPieces(event.target.value);
  const handleSuperficieChange = (event) => setSuperficie(event.target.value);
  const handleDpeChange = (event) => setDpe(event.target.value);
  const handleGesChange = (event) => setGes(event.target.value);
  const handleInfosChange = (event) => setInfos(event.target.value);
  const handlePrixChange = (event) => setPrix(event.target.value);
  const handleValidChange = (event) => setChValid(event.target.value);


  // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleSubmit = async () => {
     alert("handleSubmit : " + mode  + " = " + type + " , " + chauffage + " , " + pieces + " , " + superficie + " , " + dpe + " , " + ges + " , " + infos + " , " + prix + " , " + chValid);
      if (!type  || !chauffage || !pieces || !superficie || !dpe || !ges || !infos || !prix || !chValid) {
        alert("Merci de remplir tous les champs !");
        return;
      }
  
      try {
        var error = null;
        if(mode === "create") {
          // 👉 Insère dans la table "Annonce"
          const { data, error } = await supabase
            .from("Annonce")
            .insert([{type:type,chauffage:chauffage,pieces: pieces,superficie: superficie, prix:prix,infos:infos,dpe: dpe,ges:ges,pseudo:pseudo,valide:"En cours" }]);
        } else {
          if(mode === "update") {       

            // 👉 update dans la table "Annonce"
            const { data, error } = await supabase
              .from("Annonce")
              .update([{type:type,chauffage:chauffage,pieces: pieces,superficie: superficie, prix:prix,infos:infos,dpe: dpe,ges:ges,pseudo:pseudo,valide:chValid }])
              .eq("id", row.id)
            }
        }

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
      <DivPageVendre tabLogin={[pseudo,null,null]}/>
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
                          <select defaultValue= {row.type} onChange={handleTypeChange}>
                            <option value="" ></option>
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
                          <select defaultValue= {row.chauffage} onChange={handleChauffageChange}>
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
                          <input type='text' size={5} defaultValue={row.pieces} onChange={handlePiecesChange}></input>
                        </td>
                      </tr>

                      <tr style={styles.trTableRecherche}>
                        <td style={{paddingRight:"6px"}}>Superficie</td>
                        <td>
                          <input type='text' size={5} defaultValue={row.superficie} onChange={handleSuperficieChange}></input> m2
                        </td>
                      </tr>

                      <tr style={styles.trTableRecherche}>
                        <td>DPE</td>
                        <td>
                          <select defaultValue= {row.dpe} onChange={handleDpeChange}>
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
                          <select defaultValue= {row.ges} onChange={handleGesChange}>
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
                          <input type='text' size={5} defaultValue={row.prix} onChange={handlePrixChange}></input> €
                        </td>
                      </tr>
                      
                      <br></br>          

                      {pseudo === "admin" && (
                        <tr style={styles.trTableRecherche}>
                          <td>Valide</td>
                          <td>
                            <select defaultValue= {row.valide} onChange={handleValidChange}>
                              <option value=""></option>
                              {tabLibValid.map((libValide, index) => (
                                <option key={index} value={libValide}>{libValide}</option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      )}   

                    </table>
                  </td>

                  <td style={{verticalAlign:"top",paddingLeft:25}}>
                    <table>
                      <tr style={styles.trTableRecherche}>
                        <td style={{verticalAlign:"top",paddingRight:"10px"}}>+ d'infos</td>
                        <td>
                          <textarea rows="20" cols="100" value={row.infos} onChange={handleInfosChange}/>                   
                        </td>
                      </tr>

                    </table>
                  </td>

                  <td style={{verticalAlign:"top",paddingLeft:10}}>
                    <button style={styles.btnOk} onClick={handleSubmit}>
                      {mode !== "update" ? "Créer" : "Modifier"}
                    </button>
                  </td>                  

                </tr>
              </table>
            </div>        
  }
}

export default DivPageAnnonceCreation;
