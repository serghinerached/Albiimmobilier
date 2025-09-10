import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import fDataTableAnnonce from '../components/ReadSupabase/loadSupabaseDatas';
import { supabase } from '../components/ReadSupabase/supabaseClient';
import photo from '../photos/1-1.png'; // chemin depuis src


function DivPageHomeBottomCenter() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("Annonce") // remplace par le nom de ta table Supabase
        .select("id, created, type,chauffage,pieces,superficie,prix");

      if (error) {
        console.error("Erreur :", error);
      } else {
        setRows(data);
      }
    };

    fetchData();
  }, []);

  //-----------------------------------

  return (
          rows.map((row) => (
            <table style={{border:"2px solid black",marginBottom:"20px",fill:"black",width:"90%"}} >
              <tr style={{color:"white",backgroundColor:"Steelblue"}}>
                <td style={{padding:"5px"}}>{row.type}</td>
                <td colSpan={4} align='right' style={{paddingRight:"10px"}}>{`${row.prix} €`}</td>
              </tr>
              <tr style={{color:"black",backgroundColor:"LightSteelblue"}}>
                <td style={{padding:"5px"}}>
                  Paru le {new Date(row.created).toLocaleDateString()}
                 
                </td>
                
                <td style={{
    backgroundImage: `url(${photo})`,
    backgroundSize: "cover",      // ou "contain" selon l'effet voulu
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", width: "200px",               // largeur de la cellule
    height: "100px"}}>
                  
                </td>
              </tr>
              
             
              
            </table>
          ))
        )

}; // end fonction

export default DivPageHomeBottomCenter;
