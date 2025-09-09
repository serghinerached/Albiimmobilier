import {styles} from '../components/ComponentCss';
import {useState} from "react";

function DivPageHomeBottomLeft() {

  // Type
  const [draftType, setDraftType] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const tabLibType = ["Maison", "Appartement"];
  const handleSelectTypeChange = (event) => setDraftType(event.target.value);

  // Type
  const [draftChauffage, setDraftChauffage] = useState("");
  const [selectedChauffage, setSelectedChauffage] = useState("");
  const tabLibChauffage = ["Electricité", "Gaz","Fioul","Pompe à chaleur","Bois"];
  const handleSelectChauffageChange = (event) => setDraftChauffage(event.target.value);

  // Pieces
  const [draftPieces, setDraftPieces] = useState("");
  const [selectedPieces, setSelectedPieces] = useState("");
  const tabLibPieces = ["1", "2","3","4","5","6","+6"];
  const handleSelectPiecesChange = (event) => setDraftPieces(event.target.value);

  // Superficie
  const [draftSuperficie, setDraftSuperficie] = useState("");
  const [selectedSuperficie, setSelectedSuperficie] = useState("");
  const tabLibSuperficie = ["50", "100","150","200","250","300","+300"];
  const handleSelectSuperficieChange = (event) => setDraftSuperficie(event.target.value);

  // Prix
  const [draftPrix, setDraftPrix] = useState("");
  const [selectedPrix, setSelectedPrix] = useState("");
  const tabLibPrix = ["50 000", "100 000","150 000","200 000","250 000","300 000","+300 000"];
  const handleSelectPrixChange = (event) => setDraftPrix(event.target.value);

   // Annonceur
  const [draftAnnonceur, setDraftAnnonceur] = useState("");
  const [selectedAnnonceur, setSelectedAnnonceur] = useState("");
  const tabLibAnnonceur = ["Particulier", "Professionel"];
  const handleSelectAnnonceurChange = (event) => setDraftAnnonceur(event.target.value);

  // Validation au clic
  const handleFilterClick = () => {
    setSelectedType(draftType);
    setSelectedChauffage(draftChauffage);
    setSelectedPieces(draftPieces);
    setSelectedSuperficie(draftSuperficie);
    setSelectedPrix(draftPrix);
    setSelectedAnnonceur(draftAnnonceur);
  };

  
  //******************* 


  return  <div >
                    
            <table style={{border:"1px solid black",marginleft:"50px",padding:"10px"}}>

            <tr style={styles.trTableRecherche}>
              <td>Type</td>
              <td>
                <select value={draftType} onChange={handleSelectTypeChange}>
                  <option value="Tous">Tous</option>
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
                <select value={draftChauffage} onChange={handleSelectChauffageChange}>
                  <option value="Tous">Tous</option>
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
                <select value={draftPieces} onChange={handleSelectPiecesChange}>
                  <option value="Tous">Tous</option>
                  {tabLibPieces.map((libPieces, index) => (
                    <option key={index} value={libPieces}>
                      {libPieces}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td style={{paddingRight:"6px"}}>Superficie Max (m2)</td>
              <td>
                <select value={draftSuperficie} onChange={handleSelectSuperficieChange}>
                  <option value="Tous">Tous</option>
                  {tabLibSuperficie.map((libSuperficie, index) => (
                    <option key={index} value={libSuperficie}>
                      {libSuperficie}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td>Prix Max (€)</td>
              <td>
                <select value={draftSuperficie} onChange={handleSelectPrixChange}>
                  <option value="Tous">Tous</option>
                  {tabLibPrix.map((libPrix, index) => (
                    <option key={index} value={libPrix}>
                      {libPrix}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td>Annonceur</td>
              <td>
                <select value={draftSuperficie} onChange={handleSelectAnnonceurChange}>
                  <option value="Tous">Tous</option>
                  {tabLibAnnonceur.map((libAnnonceur, index) => (
                    <option key={index} value={libAnnonceur}>
                      {libAnnonceur}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr style={styles.trTableRecherche}>
              <td style={{columnSpan:"2"}}>
                <button style={{marginTop:"10px",...styles.btnOk}} onClick={handleFilterClick}>Filtrer</button>
              </td>
            </tr>

            </table>

            
          </div>        
}

export default DivPageHomeBottomLeft;
