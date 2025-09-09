import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import fDataTableAnnonce from '../components/ReadSupabase/loadSupabaseDatas';
import { supabase } from '../components/ReadSupabase/supabaseClient';

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
            <table style={{border:"2px solid black",marginBottom:"20px",fill:"black",width:"85%"}} >
              <tr style={{color:"white",backgroundColor:"Steelblue"}}>
                <td style={{padding:"5px"}}>{row.type}</td>
                <td colSpan={4} align='right'>{`${row.prix} €`}</td>
              </tr>
              <tr style={{color:"black",backgroundColor:"LightSteelblue"}}>
                <td style={{padding:"5px"}}>
                  <label for="created">Paru le</label><br></br>
                  <input type="text" name="created" id="chauffage" value= {new Date(row.created).toLocaleDateString()} disabled="disabled" size="7"
                   style={{textAlign:"center"}}/>
                </td>
                <td>
                  <label for="chauffage">Chauffage</label><br></br>
                  <input type="text" name="chauffage" id="chauffage" value={row.chauffage} disabled="disabled" size="6"  style={{textAlign:"center"}}/>
                </td>
                 <td>
                  <label for="pieces">Pieces</label><br></br>
                  <input type="text" name="pieces" id="chpiecesauffage" value={row.pieces} disabled="disabled" size="1"  style={{textAlign:"center"}}/>
                </td>
                 <td>
                  <label for="superficie">Superficie</label><br></br>
                  <input type="text" name="superficie" id="superficie" value={`${row.superficie} m2`}   disabled="disabled" size="5"  style={{textAlign:"center"}} />
                </td>
                <td>
                  photo
                </td>
              </tr>
              
             
              
            </table>
          ))
        )

}; // end fonction

export default DivPageHomeBottomCenter;
