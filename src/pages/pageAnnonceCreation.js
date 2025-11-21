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

  const [type, setType] = useState("");
  const tabLibType = ["Maison", "Appartement"];
  const [chauffage, setChauffage] = useState("");
  const tabLibChauffage = ["Electrique", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const [pieces, setPieces] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [dpe, setDpe] = useState("");
  const tabLibDpe = ["En cours", "A","B","C","D","E","F","G"];
  const [ges, setGes] = useState("");
  const tabLibGes = ["En cours", "A","B","C","D","E","F","G"];
  const [infos, setInfos] = useState("");
  const [prix, setPrix] = useState("");

/*
  if(mode === "update") {
    setType(row.type);
    setChauffage(row.chauffage);
    setPieces(row.pieces);
    setSuperficie(row.superficie);
    setDpe(row.dpe);
    setGes(row.ges);
    setInfos(row.infos);
    setPrix(row.prix);
  }
 */
  // if change
  const handleTypeChange = (event) => setType(event.target.value);
  const handleChauffageChange = (event) => setChauffage(event.target.value);
  const handlePiecesChange = (event) => setPieces(event.target.value);
  const handleSuperficieChange = (event) => setSuperficie(event.target.value);
  const handleDpeChange = (event) => setDpe(event.target.value);
  const handleGesChange = (event) => setGes(event.target.value);
  const handleInfosChange = (event) => setInfos(event.target.value);
  const handlePrixChange = (event) => setPrix(event.target.value);

  var libValide = "En cours"
  if(pseudo === "admin") {
    libValide = "Oui"
  } 

  // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleSubmit = async () => {
      alert(mode);
      if (!type  || !chauffage || !pieces || !superficie || !dpe || !ges || !infos || !prix) {
        alert("Merci de remplir tous les champs !");
        return;
      }
  
      try {
        var error = null;
        if(mode === "create") {
          // 👉 Insère dans la table "Annonce"
          const { data, error } = await supabase
            .from("Annonce")
            .insert([{type:type,chauffage:chauffage,pieces: pieces,superficie: superficie, prix:prix,infos:infos,dpe: dpe,ges:ges,pseudo:pseudo,valide:libValide }]);
        } else {
          if(mode === "update") {       
            alert("update");

            // 👉 update dans la table "Annonce"
            const { data, error } = await supabase
              .from("Annonce")
              .update([{type:type,chauffage:chauffage,pieces: pieces,superficie: superficie, prix:prix,infos:infos,dpe: dpe,ges:ges,pseudo:pseudo,valide:libValide }])
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
                          <input type='text' size={5} value={row.pieces} onChange={handlePiecesChange}></input>
                        </td>
                      </tr>

                      <tr style={styles.trTableRecherche}>
                        <td style={{paddingRight:"6px"}}>Superficie</td>
                        <td>
                          <input type='text' size={5} value={row.superficie} onChange={handleSuperficieChange}></input> m2
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
                          <input type='text' size={5} value={row.prix} onChange={handlePrixChange}></input> €
                        </td>
                      </tr>

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
                      <button style={styles.btnOk}
                      onClick={handleSubmit} >Valider</button>
                  </td>                  

                </tr>
              </table>
            </div>        
  }
}

export default DivPageAnnonceCreation;
