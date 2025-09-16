import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageHomeBottomCenter({ onTextClick }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from("Annonce") // remplace par le nom de ta table Supabase
        .select("*");

      if (error) {
        console.error("Erreur :", error);
      } else {
        setRows(data);
      }
    };

    fetchData();
  }, []);

  // pour photos dynamiques
  const images = require.context("../photos", false, /\.(png|jpe?g|svg)$/);
  const getImage = (id) => {
    const filename = `${id}-1.png`;
    return images.keys().includes(`./${filename}`)
      ? images(`./${filename}`)
      : images("./default.png"); // fallback
  };

  //-----------------------------------

  return (
          rows.map((row) => (
            <table style={{border:"2px solid black",marginBottom:"20px",fill:"black",width:"80%"}} >
              <tr style={{color:"white",backgroundColor:"#D2691E"}}>
                <td style={{padding:"5px",width:"37%"}}>{row.type}</td>
                <td colSpan={3} align='right' style={{paddingRight:"10px"}}>{`${row.prix} €`}</td>
              </tr>
              <tr style={{color:"black"}}>
                <td style={{padding:"5px",textAlign:"left",backgroundColor:"	#FFDEAD"}}>
                  Paru le {new Date(row.created).toLocaleDateString()} <br></br>
                  {row.superficie} m2 <br></br>
                  {row.pieces} pièces  <br></br>
                  <img
                    src={getImage("x")}
                    alt="icone"
                    style={{ width: "70px", height: "15px",cursor: "pointer"  }}
                    onClick={() => onTextClick(row)} // ok

                  /> 
                </td>
             
                <td style={{
                  backgroundImage: `url(${getImage(row.id)})`,
                  backgroundSize: "cover",      // ou "contain" selon l'effet voulu
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center", 
                  width: "100px",               // largeur de la cellule
                  height: "100px"}}>
                </td>
                
              </tr>
              
             
              
            </table>
          ))
        )

}; // end fonction

export default DivPageHomeBottomCenter;
