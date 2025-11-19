import {styles} from '../components/ComponentCss';
import {useState,useEffect} from "react";
import { supabase } from '../components/ReadSupabase/supabaseClient';


function DivPageHomeBottomRight({ row }) { 
  const [mail,setMail] = useState("");


  if (!row || row[0] == "filter") {
    return 
    <div></div>;
  }

function formatPrix(valeur) {
  const num = Number(String(valeur).replace(/[^\d.-]/g, ""));
  return isNaN(num) ? "" : `${num.toLocaleString("fr-FR")} €`;
}

  // pour photos dynamiques
  const image = require.context("../photos", false, /\.(png|jpe?g|svg)$/);
  const getImage = (nameImage) => {
    const filename = `${nameImage}`;
    return image.keys().includes(`./${filename}`)
      ? image(`./${filename}`)
      : image("./grey.png"); // fallback
  };


  // pour dpe dynamiques
  const dpe = require.context("../photos/DPE", false, /\.(png|jpe?g|svg)$/);
  const getDpe = (nameDpe) => {
    const filename = `${nameDpe}`;
    return dpe.keys().includes(`./${filename}`)
      ? dpe(`./${filename}`)
      : dpe("./inconnu.png"); // fallback
  };

  // pour dpe dynamiques
  const ges = require.context("../photos/GES", false, /\.(png|jpe?g|svg)$/);
  const getGes = (nameGes) => {
    const filename = `${nameGes}`;
    return ges.keys().includes(`./${filename}`)
      ? ges(`./${filename}`)
      : ges("./inconnu.png"); // fallback
  };

  //get mail by pseudo
  const getMail = async () => {

    const pseudo = row.pseudo;      
    let query = supabase.from("Account").select("*");
    query = query.eq("pseudo",pseudo);
    const { data, error } = await query

    if (error) {
      console.error("Erreur :", error);
    } else {
      setMail(data[0].email);
    }

  };

  getMail();

  //--------------------------------------------------------------

  function ImageCell({ src }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        {/* Cellule dans le tableau */}
        <td
          onClick={() => setOpen(true)}
          style={{border:"1px solid black",
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100px",
            height: "100px",
            cursor: "pointer",
          }}
        ></td>

        {/* Popup plein écran si open = true */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              cursor: "zoom-out",
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
      </>
    );
  }

  //-----------------------------------------

  return (
    <div>

        <table style={{border:"2px solid black",marginBottom:"20px",fill:"black",width:"100%",height:"100%"}} >

          <tr style={{color:"white",backgroundColor:"#D2691E"}}>
            <td style={{padding:"5px",width:"50%"}}>{row.type}</td>
            <td colSpan={3} align='right' style={{paddingRight:"10px"}}>{formatPrix(row.prix)}</td>
          </tr>

          <tr style={{color:"black"}}>

            <td style={{verticalAlign:"top",padding:"10px",textAlign:"left",backgroundColor:"white",wordBreak: "break-word",height:"100%"}} rowspan="5">
              <strong>ANNONCE N°</strong> {row.id} <br></br>
              <strong>Paru le</strong> {new Date(row.created).toLocaleDateString()} <br></br><br></br>
              <strong>Superficie :</strong> {row.superficie} m2 <br></br>
              <strong>Pièces:</strong> {row.pieces} <br></br>
              <strong>chauffage :</strong> {row.chauffage} <br></br><br></br>
              <strong>Plus d'infos :</strong> {row.infos} <br></br><br></br>

              <strong>Contacts :</strong> {mail} <br></br>
            </td>
          
            <ImageCell src={getImage(row.id + "-1.png")} />
            <ImageCell src={getImage(row.id + "-2.png")} />
            
          </tr>

          <tr style={{color:"black"}}>
            <ImageCell src={getImage(row.id + "-3.png")} />
            <ImageCell src={getImage(row.id + "-4.png")} />
          </tr>

        
          <tr style={{color:"black"}}>
            <ImageCell src={getImage(row.id + "-5.png")} />
            <ImageCell src={getImage(row.id + "-6.png")} />
          </tr>

          <tr >
            
            <td style={{textAlign:"center",backgroundColor:"white",color:"black",fontSize:"12px",fontWeight:"bold"}}>
              Performance énergetique
            </td>

            <td style={{textAlign:"center",backgroundColor:"white",color:"black",fontSize:"12px",fontWeight:"bold"}}>
              Performance climatique
            </td>
            
          </tr>

          <tr >
            
            <td style={{
              backgroundColor:"white",
              backgroundImage: `url(${getDpe("DPE-" + row.dpe + ".png")})`,
              backgroundSize: "contain",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "150px"}}>
            </td>

            <td style={{
              backgroundColor:"white",
              backgroundImage: `url(${getGes("GES-" + row.ges + ".png")})`,
              backgroundSize: "contain",      // ou "contain" selon l'effet voulu
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", 
              width: "100px",               // largeur de la cellule
              height: "150px"}}>
            </td>
            
          </tr>
              
        </table>
      
    </div>
  );

}; // end fonction

export default DivPageHomeBottomRight;
