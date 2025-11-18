import styles from "../components/ComponentCss";
import { supabase } from '../components/ReadSupabase/supabaseClient';
import {useState,useEffect} from "react";
import { FaEdit,FaTrash } from "react-icons/fa"; // Icône "Edit" de FontAwesome
import DivPageAnnonceCreation from "./pageAnnonceCreation";

function DivPageVendre({tabLogin}) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chPseudo,setChPseudo] = useState("");
    const [create,setCreate] = useState(false)
    

    // 🔹 Charger toutes les annonces au démarrage
      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const pseudo = tabLogin[0];      
            const pwd = tabLogin[1];  
            setChPseudo(pseudo);

            let query = supabase.from("Annonce").select("*");
            query = query.eq("pseudo",pseudo);

            const { data, error } = await query

            if (error) {
            console.error("Erreur :", error);
            } else {
            setRows(data);
            }
            setLoading(false);
        };
    
        fetchData();
      }, []); // ← [] : s'exécute UNE SEULE FOIS au montage

      //-----------------------

      // 🔹 Fonction appelée quand on clique sur "Valider"
    const handleCreate = async () => {
        setCreate(true)
    };

    //-------------------------------------

    if(create === true) {
        return (
            <DivPageAnnonceCreation/>
        );
    } else {

    return (
    <div>
    
        <table><tr>
            <td><h2 >Mon Compte : {chPseudo}</h2></td>
            <td style={{paddingLeft:"10px",verticalAlign:"bottom"}}><FaEdit size={20} style={styles.colMessages} onClick=""></FaEdit></td>
            <td style={{paddingLeft:"10px",verticalAlign:"bottom"}}><FaTrash size={20} style={{marginTop:"3px",...styles.colMessages}} onClick=""></FaTrash></td>
        </tr></table>
        <br></br>
        <table style={styles.tableIncidents}>
            <tbody>
                <tr>
                    <td ><button style={styles.btnCreerAnnonce} onClick={handleCreate} >Créer</button></td>
                    <th colSpan={4} style={{textAlign:"left",padding:"5px 0 5px 80px"}}>MES ANNONCES</th> 
                </tr>

                <tr style={{ color: "black", backgroundColor: "#D2691E" }}>
                    <th  style={{ padding: "5px",border:"1px solid black" }}>Num</th> 
                    <th  style={{ padding: "5px",border:"1px solid black" }}>Date</th> 
                    <th  style={{ padding: "5px",border:"1px solid black"}}>Type</th> 
                    <th  style={{ padding: "5px",border:"1px solid black" }}>Modifier</th> 
                    <th  style={{ padding: "5px",border:"1px solid black" }}>Supprimer</th> 
                </tr>

                {rows.map((row) => (
                    <tr>
                    <td style={styles.tdTabMesAnnonces}>{row.id}</td>
                    <td style={styles.tdTabMesAnnonces}>{new Date(row.created).toLocaleDateString()}</td>
                    <td style={styles.tdTabMesAnnonces}>{row.type}</td>
                    <td style={styles.tdTabMesAnnonces}>
                        <FaEdit size={20} style={styles.colMessages} onClick=""/>
                    </td>
                    <td style={styles.tdTabMesAnnonces}>
                        <FaTrash  size={20} style={styles.colMessages} onClick=""/>
                    </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    
    </div>
    )
}
}
export default DivPageVendre;